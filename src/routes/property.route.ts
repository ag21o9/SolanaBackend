import { Router } from 'express'

const propertyRouter = Router()

// Store a new property
propertyRouter.post('/store', async (req, res) => {
    const { propertyId, name, city, area, description, mintAddress, metadataUri, ownerWallet } = req.body;

    // TODO: Add Prisma client import and logic to store property in DB
    // Example:
    // const property = await prisma.property.create({ data: { ... } })

    res.status(201).json({ message: 'Property stored successfully' })
})

export default propertyRouter
