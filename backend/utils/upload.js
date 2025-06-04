import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const profilePhotoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ITConnect/profile_photos",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

const companyLogoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ITConnect/company_logos",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 400, height: 400, crop: "limit" }],
  },
});

export const profilePhotoUpload = multer({ storage: profilePhotoStorage });
export const companyLogoUpload = multer({ storage: companyLogoStorage });
