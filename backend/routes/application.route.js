import express from "express";
import {
  applyJob,
  getApplicationsByApplicant,
  getApplicationsForEmployer,
  updateApplicationStatus,
  cancelApplication,
} from "../controllers/application.controller.js";
import {
  isAuthenticated,
  isEmployer,
  isJobseeker,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isJobseeker, applyJob);

router.route("/").get(isAuthenticated, isJobseeker, getApplicationsByApplicant);

router
  .route("/job/:id")
  .get(isAuthenticated, isEmployer, getApplicationsForEmployer);

router.route("/:id").put(isAuthenticated, isEmployer, updateApplicationStatus);

router.route("/:id").delete(isAuthenticated, isJobseeker, cancelApplication);

export default router;
