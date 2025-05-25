import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  getJobsByEmployer,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { isAuthenticated, isEmployer } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isEmployer, createJob);

router.route("/").get(getJobs);

router
  .route("/jobsbyemployer")
  .get(isAuthenticated, isEmployer, getJobsByEmployer);

router.route("/:id").get(getJobById);

router.route("/:id").put(isAuthenticated, isEmployer, updateJob);

router.route("/:id").delete(isAuthenticated, isEmployer, deleteJob);

export default router;
