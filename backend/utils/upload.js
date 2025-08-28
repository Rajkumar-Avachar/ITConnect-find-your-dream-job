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

const resumeStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ITConnect/resumes",
    allowed_formats: ["pdf", "doc", "docx"],
  },
});


const companyLogoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ITConnect/company_logos",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 400, height: 400, crop: "limit" }],
  },
});


export const profileResumeUpload = multer({
  storage: {
    _handleFile(req, file, cb) {
      if (file.fieldname === "profilePhoto") {
        profilePhotoStorage._handleFile(req, file, cb);
      } else if (file.fieldname === "resume") {
        resumeStorage._handleFile(req, file, cb);
      } else {
        cb(new Error("Unsupported field"));
      }
    },
    _removeFile(req, file, cb) {
      if (file.fieldname === "profilePhoto") {
        profilePhotoStorage._removeFile(req, file, cb);
      } else if (file.fieldname === "resume") {
        resumeStorage._removeFile(req, file, cb);
      } else {
        cb(new Error("Unsupported field"));
      }
    },
  },
}).fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]);


export const companyLogoUpload = multer({ storage: companyLogoStorage }).single(
  "companyLogo"
);
