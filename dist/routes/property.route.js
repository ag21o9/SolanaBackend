import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma.config.js';
import { upload, uploadFile } from '../config/imageKit.config.js';
const propertyRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET ?? 'hello world';
function getUserIdFromAuthHeader(authHeader) {
    if (!authHeader?.startsWith('Bearer '))
        return null;
    const token = authHeader.split(' ')[1];
    if (!token)
        return null;
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (typeof decoded === 'string')
            return null;
        return typeof decoded.userId === 'string' ? decoded.userId : null;
    }
    catch {
        return null;
    }
}
async function getUserWalletFromAuthHeader(authHeader) {
    const userId = getUserIdFromAuthHeader(authHeader);
    if (!userId)
        return null;
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { walletAddress: true },
    });
    return user?.walletAddress ?? null;
}
function normalizePropertyType(value) {
    if (typeof value !== 'string')
        return null;
    const normalized = value.trim().toLowerCase();
    if (normalized === 'residential')
        return 'Residential';
    if (normalized === 'commercial')
        return 'Commercial';
    if (normalized === 'industrial')
        return 'Industrial';
    if (normalized === 'mixeduse' || normalized === 'mixed_use' || normalized === 'mixed-use')
        return 'MixedUse';
    return null;
}
function normalizeTokenModel(value) {
    if (typeof value !== 'string')
        return null;
    const normalized = value.trim().toLowerCase();
    if (normalized === 'nft' || normalized === 'spl')
        return normalized;
    return null;
}
function getOptionalString(value) {
    return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}
function getOptionalInt(value) {
    if (typeof value !== 'number' || !Number.isFinite(value))
        return undefined;
    return Math.trunc(value);
}
function getMediaFromStep3(step3Data) {
    if (!step3Data || typeof step3Data !== 'object') {
        return { images: [] };
    }
    const step3 = step3Data;
    const imagesFromImagesKey = Array.isArray(step3.images)
        ? step3.images.filter((item) => typeof item === 'string' && item.trim().length > 0)
        : [];
    const imagesFromGalleryKey = Array.isArray(step3.gallery)
        ? step3.gallery.filter((item) => typeof item === 'string' && item.trim().length > 0)
        : [];
    const merged = [...imagesFromImagesKey, ...imagesFromGalleryKey];
    const uniqueImages = Array.from(new Set(merged));
    const coverImageUrl = getOptionalString(step3.coverImage);
    if (coverImageUrl && !uniqueImages.includes(coverImageUrl)) {
        uniqueImages.unshift(coverImageUrl);
    }
    if (coverImageUrl) {
        return { images: uniqueImages, coverImageUrl };
    }
    return { images: uniqueImages };
}
function toBooleanQuery(value) {
    if (value === undefined)
        return undefined;
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    return undefined;
}
function getDraftWorkflowStatus(draft) {
    if (!draft.submittedAt)
        return 'not_submitted';
    if (draft.property)
        return 'approved';
    return 'submitted';
}
propertyRouter.get('/listings/drafts', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { submitted, approved, stepCompletedMin, stepCompletedMax, page, limit } = req.query;
        const parsedPage = Number(page ?? 1);
        const parsedLimit = Number(limit ?? 10);
        const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? Math.trunc(parsedPage) : 1;
        const take = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(Math.trunc(parsedLimit), 50) : 10;
        const skip = (currentPage - 1) * take;
        const submittedBool = toBooleanQuery(submitted);
        const approvedBool = toBooleanQuery(approved);
        if (submitted !== undefined && submittedBool === undefined) {
            return res.status(400).json({ message: 'Invalid submitted query. Use true or false' });
        }
        if (approved !== undefined && approvedBool === undefined) {
            return res.status(400).json({ message: 'Invalid approved query. Use true or false' });
        }
        const where = { userWallet };
        const stepCompletedFilter = {};
        const minStep = Number(stepCompletedMin);
        if (stepCompletedMin !== undefined) {
            if (!Number.isFinite(minStep)) {
                return res.status(400).json({ message: 'Invalid stepCompletedMin query' });
            }
            stepCompletedFilter.gte = Math.trunc(minStep);
        }
        const maxStep = Number(stepCompletedMax);
        if (stepCompletedMax !== undefined) {
            if (!Number.isFinite(maxStep)) {
                return res.status(400).json({ message: 'Invalid stepCompletedMax query' });
            }
            stepCompletedFilter.lte = Math.trunc(maxStep);
        }
        if (Object.keys(stepCompletedFilter).length > 0) {
            where.stepCompleted = stepCompletedFilter;
        }
        if (submittedBool === true)
            where.submittedAt = { not: null };
        if (submittedBool === false)
            where.submittedAt = null;
        if (approvedBool === true)
            where.propertyId = { not: null };
        if (approvedBool === false)
            where.propertyId = null;
        const [drafts, total] = await Promise.all([
            prisma.listingDraft.findMany({
                where: where,
                include: {
                    property: {
                        select: {
                            id: true,
                            status: true,
                            name: true,
                            mintAddress: true,
                        },
                    },
                },
                orderBy: [{ submittedAt: 'desc' }, { id: 'desc' }],
                skip,
                take,
            }),
            prisma.listingDraft.count({ where: where }),
        ]);
        const items = drafts.map((draft) => ({
            ...draft,
            workflowStatus: getDraftWorkflowStatus(draft),
        }));
        return res.json({
            message: 'Drafts fetched successfully',
            data: items,
            pagination: {
                page: currentPage,
                limit: take,
                total,
                totalPages: Math.ceil(total / take),
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch drafts' });
    }
});
propertyRouter.get('/listings/drafts/submitted', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const drafts = await prisma.listingDraft.findMany({
            where: {
                userWallet,
                submittedAt: { not: null },
            },
            include: {
                property: {
                    select: {
                        id: true,
                        status: true,
                        name: true,
                        mintAddress: true,
                    },
                },
            },
            orderBy: [{ submittedAt: 'desc' }, { id: 'desc' }],
        });
        return res.json({
            message: 'Submitted drafts fetched successfully',
            data: drafts.map((draft) => ({
                ...draft,
                workflowStatus: getDraftWorkflowStatus(draft),
            })),
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch submitted drafts' });
    }
});
propertyRouter.get('/listings/drafts/not-submitted', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const drafts = await prisma.listingDraft.findMany({
            where: {
                userWallet,
                submittedAt: null,
            },
            include: {
                property: {
                    select: {
                        id: true,
                        status: true,
                        name: true,
                        mintAddress: true,
                    },
                },
            },
            orderBy: { id: 'desc' },
        });
        return res.json({
            message: 'Not-submitted drafts fetched successfully',
            data: drafts.map((draft) => ({
                ...draft,
                workflowStatus: getDraftWorkflowStatus(draft),
            })),
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch not-submitted drafts' });
    }
});
propertyRouter.get('/listings/drafts/:draftId', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { draftId } = req.params;
        const draft = await prisma.listingDraft.findUnique({
            where: { id: draftId },
            include: {
                property: {
                    select: {
                        id: true,
                        status: true,
                        name: true,
                        mintAddress: true,
                        metadataUri: true,
                        treasuryPda: true,
                    },
                },
            },
        });
        if (!draft)
            return res.status(404).json({ message: 'Draft not found' });
        if (draft.userWallet !== userWallet) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        return res.json({
            message: 'Draft fetched successfully',
            draft: {
                ...draft,
                workflowStatus: getDraftWorkflowStatus(draft),
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch draft' });
    }
});
propertyRouter.get('/properties', async (req, res) => {
    try {
        const { status, country, city, type, page, limit } = req.query;
        const parsedPage = Number(page ?? 1);
        const parsedLimit = Number(limit ?? 10);
        const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? Math.trunc(parsedPage) : 1;
        const take = Number.isFinite(parsedLimit) && parsedLimit > 0 ? Math.min(Math.trunc(parsedLimit), 50) : 10;
        const skip = (currentPage - 1) * take;
        const normalizedType = normalizePropertyType(type);
        if (type && !normalizedType) {
            return res.status(400).json({ message: 'Invalid property type' });
        }
        const where = {};
        if (status)
            where.status = status;
        if (country)
            where.country = country;
        if (city)
            where.city = city;
        if (normalizedType)
            where.type = normalizedType;
        const [items, total] = await Promise.all([
            prisma.property.findMany({
                where: where,
                orderBy: { createdAt: 'desc' },
                skip,
                take,
            }),
            prisma.property.count({ where: where }),
        ]);
        return res.json({
            message: 'Properties fetched successfully',
            data: items,
            pagination: {
                page: currentPage,
                limit: take,
                total,
                totalPages: Math.ceil(total / take),
            },
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch properties' });
    }
});
propertyRouter.get('/properties/:propertyId', async (req, res) => {
    try {
        const { propertyId } = req.params;
        const property = await prisma.property.findUnique({
            where: { id: propertyId },
        });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        return res.json({
            message: 'Property fetched successfully',
            property,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch property' });
    }
});
propertyRouter.post('/listings/draft', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { step, basicInfo } = req.body;
        if (step !== 1) {
            return res.status(400).json({ message: 'Invalid step. Expected step: 1' });
        }
        const draft = await prisma.listingDraft.create({
            data: {
                userWallet,
                stepCompleted: 1,
                step1Data: basicInfo ?? {},
            },
        });
        return res.status(201).json({
            message: 'Draft created',
            draftId: draft.id,
            draft,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to create draft' });
    }
});
propertyRouter.patch('/listings/:draftId', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { draftId } = req.params;
        const { step, tokenomics, mediaUploads, legalDocs } = req.body;
        const stepNumber = Number(step);
        if (![2, 3, 4].includes(stepNumber)) {
            return res.status(400).json({ message: 'Invalid step. Use 2, 3, or 4' });
        }
        const existing = await prisma.listingDraft.findUnique({
            where: { id: draftId },
        });
        if (!existing)
            return res.status(404).json({ message: 'Draft not found' });
        if (existing.userWallet !== userWallet) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        const data = {
            stepCompleted: Math.max(existing.stepCompleted, stepNumber),
        };
        if (stepNumber === 2)
            data.step2Data = tokenomics ?? {};
        if (stepNumber === 3)
            data.step3Data = mediaUploads ?? {};
        if (stepNumber === 4)
            data.step4Data = legalDocs ?? {};
        const draft = await prisma.listingDraft.update({
            where: { id: draftId },
            data,
        });
        return res.json({
            message: `Step ${step} saved`,
            draft,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to update draft' });
    }
});
propertyRouter.post('/upload/image', upload.single('file'), async (req, res) => {
    try {
        if (!req.file?.buffer) {
            return res.status(400).json({ message: 'Image file is required (field: file)' });
        }
        const uploaded = await uploadFile(req.file.buffer, req.file.originalname);
        return res.status(201).json({
            message: 'Image uploaded',
            imageUrl: uploaded.url,
            fileId: uploaded.fileId,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to upload image' });
    }
});
/**
 * Review submit
 * POST /api/listings/:draftId/submit
 */
propertyRouter.post('/listings/:draftId/submit', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { draftId } = req.params;
        const existing = await prisma.listingDraft.findUnique({
            where: { id: draftId },
        });
        if (!existing)
            return res.status(404).json({ message: 'Draft not found' });
        if (existing.userWallet !== userWallet) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        if (existing.stepCompleted < 4) {
            return res.status(400).json({ message: 'Complete all 4 steps before submission' });
        }
        const draft = await prisma.listingDraft.update({
            where: { id: draftId },
            data: {
                submittedAt: new Date(),
            },
        });
        // TODO: trigger admin queue (BullMQ / SQS / webhook)
        // await queue.add('listing-review', { draftId })
        return res.json({
            message: 'Draft submitted for admin review',
            draft,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to submit draft' });
    }
});
propertyRouter.post('/mint/property', async (req, res) => {
    try {
        const userWallet = await getUserWalletFromAuthHeader(req.headers.authorization);
        if (!userWallet)
            return res.status(401).json({ message: 'Unauthorized' });
        const { draftId } = req.body;
        if (!draftId)
            return res.status(400).json({ message: 'draftId is required' });
        const draft = await prisma.listingDraft.findUnique({ where: { id: draftId } });
        if (!draft)
            return res.status(404).json({ message: 'Draft not found' });
        if (draft.userWallet !== userWallet) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        if (!draft.submittedAt) {
            return res.status(400).json({ message: 'Submit draft for review before minting' });
        }
        const step1 = draft.step1Data ?? {};
        const step2 = draft.step2Data ?? {};
        const step3 = draft.step3Data;
        const name = getOptionalString(step1.name);
        const country = getOptionalString(step1.country);
        const propertyType = normalizePropertyType(step1.type);
        const tokenModel = normalizeTokenModel(step2.tokenModel ?? 'spl');
        if (!name || !country || !propertyType || !tokenModel) {
            return res.status(400).json({
                message: 'Draft is missing required fields for property mint (name, country, type, tokenModel)',
            });
        }
        const { images, coverImageUrl } = getMediaFromStep3(step3);
        // TODO: replace with real Solana mint flow
        const mintAddress = `mint_${draftId}`;
        const metadataUri = `https://metadata.example.com/${draftId}.json`;
        const treasuryPDA = `treasury_${draftId}`;
        const city = getOptionalString(step1.city);
        const addressFull = getOptionalString(step1.addressFull);
        const description = getOptionalString(step1.description);
        const yearBuilt = getOptionalInt(step1.yearBuilt);
        const areaSqft = getOptionalInt(step1.areaSqft);
        const propertyData = {
            ownerWallet: userWallet,
            name,
            type: propertyType,
            tokenModel,
            country,
            status: 'live',
            mintAddress,
            metadataUri,
            treasuryPda: treasuryPDA,
            images,
        };
        if (city !== undefined)
            propertyData.city = city;
        if (addressFull !== undefined)
            propertyData.addressFull = addressFull;
        if (description !== undefined)
            propertyData.description = description;
        if (yearBuilt !== undefined)
            propertyData.yearBuilt = yearBuilt;
        if (areaSqft !== undefined)
            propertyData.areaSqft = areaSqft;
        if (coverImageUrl !== undefined)
            propertyData.coverImageUrl = coverImageUrl;
        let property;
        if (draft.propertyId) {
            property = await prisma.property.update({
                where: { id: draft.propertyId },
                data: propertyData,
            });
        }
        else {
            property = await prisma.property.create({
                data: propertyData,
            });
            await prisma.listingDraft.update({
                where: { id: draftId },
                data: {
                    propertyId: property.id,
                },
            });
        }
        return res.json({
            message: 'Mint completed',
            mintAddress,
            metadataUri,
            treasuryPDA,
            property,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to mint property' });
    }
});
export default propertyRouter;
//# sourceMappingURL=property.route.js.map