import dotenv from "dotenv";
import multer from "multer";
import uploadFile from "./imageKit.config";
import cors from "cors";
import express from 'express'


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors())

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/create-post", upload.single("image"), async (req: any, res: any) => {
    const data = req.body;
    const fileBuffer = req.file.buffer;
    const uploadResult = await uploadFile(fileBuffer);
    data.image = uploadResult.url;
    console.log("Received data:", data);
    try {
        const newPost = await Post.create({
            image: data.image,
            caption: data.caption,
        });
        res.status(201).json(newPost);
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});