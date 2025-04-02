import express from "express";
import {
  createJob,
  getJobs,
  getJobById,
  getJobsByRecruiter,
  updateJob,
  deleteJob,
} from "../controllers/job.controller.js";
import { isAuthenticated, isRecruiter } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isRecruiter, createJob);

router.route("/").get(getJobs);

router
  .route("/jobsbyrecruiter")
  .get(isAuthenticated, isRecruiter, getJobsByRecruiter);

router.route("/:id").get(getJobById);

router.route("/:id").put(isAuthenticated, isRecruiter, updateJob);

router.route("/:id").delete(isAuthenticated, isRecruiter, deleteJob);

export default router;
