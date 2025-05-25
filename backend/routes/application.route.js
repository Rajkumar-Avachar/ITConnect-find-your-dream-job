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
  isApplicant,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isApplicant, applyJob);

router.route("/").get(isAuthenticated, isApplicant, getApplicationsByApplicant);

router
  .route("/job/:id")
  .get(isAuthenticated, isEmployer, getApplicationsForEmployer);

router.route("/:id").put(isAuthenticated, isEmployer, updateApplicationStatus);

router.route("/:id").delete(isAuthenticated, isApplicant, cancelApplication);

export default router;
