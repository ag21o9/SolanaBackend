import { ImageKit } from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config()

import multer from 'multer'

const storage = multer.diskStorage({
    destination: process.env.MULTER_UPLOAD_DIR || '/tmp',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
})


export const upload = multer({ storage });


dotenv.config();

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadFile(buffer: any) {
    console.log(buffer);
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: `image_${Date.now()}.jpg`
    });

    return result;
}

export default uploadFile;