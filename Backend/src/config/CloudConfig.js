import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Helper function to generate clean storage targets
const createStorage = (folderName, formats) => {
  return new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: `unefly_uploads/${folderName}`, // Keeps your Cloudinary dashboard organized
      allowed_formats: formats,
      resource_type: 'auto'
    },
  });
};

// 1. STRICT IMAGE STORAGE (For University Covers, Passport Photos)
const imageStorage = createStorage('images', ['jpg', 'jpeg', 'png', 'webp']);

// 2. STRICT DOCUMENT STORAGE (For Career CVs, Student Passports/Transcripts)
const documentStorage = createStorage('documents', ['pdf', 'doc', 'docx']);

// 3. MIXED STORAGE (If a route genuinely needs to accept both images and files)
const mixedStorage = createStorage('mixed', ['jpg', 'jpeg', 'png', 'pdf']);

// 4. Strict document storage (for Testimonial videos like short video interview or review)
const videoStorage = createStorage('shortVideos', ['mp4', 'mov', 'avi', 'mkv', 'webm']);


// Export specific Multer upload middlewares
export const uploadImage = multer({ storage: imageStorage });
export const uploadDoc = multer({ storage: documentStorage });
export const uploadMixed = multer({ storage: mixedStorage });
export const uploadVideo = multer({ storage: videoStorage });
export { cloudinary };