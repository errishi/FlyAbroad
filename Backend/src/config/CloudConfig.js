import {v2 as cloudinary} from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
    folder: 'unefly_uploads', // Updated to match your current project
    
    // 1. Expanded formats to include standard document and video types
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'mp4', 'mov', 'avi', 'mkv'], 
    
    // 2. CRITICAL: Allows Cloudinary to process non-image files securely
    resource_type: 'auto' 
  },
});

export { cloudinary, storage };