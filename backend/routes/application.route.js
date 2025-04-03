import express from "express";
import {
  applyJob,
  getApplicationsByApplicant,
  getApplicationsForRecruiter,
  updateApplicationStatus,
  cancelApplication,
} from "../controllers/application.controller.js";
import {
  isAuthenticated,
  isRecruiter,
  isApplicant,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isApplicant, applyJob);

router.route("/").get(isAuthenticated, isApplicant, getApplicationsByApplicant);

router
  .route("/job/:id")
  .get(isAuthenticated, isRecruiter, getApplicationsForRecruiter);

router.route("/:id").put(isAuthenticated, isRecruiter, updateApplicationStatus);

router.route("/:id").delete(isAuthenticated, isApplicant, cancelApplication);

export default router;
