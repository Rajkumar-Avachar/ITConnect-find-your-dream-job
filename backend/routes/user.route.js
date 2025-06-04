import express from "express";
import {
  register,
  login,
  logout,
  updateProfile,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

import { profilePhotoUpload } from "../utils/upload.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout);

router
  .route("/updateProfile")
  .put(
    isAuthenticated,
    profilePhotoUpload.single("profilePhoto"),
    updateProfile
  );

export default router;
