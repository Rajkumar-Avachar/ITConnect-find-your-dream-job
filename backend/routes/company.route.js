import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated, isRecruiter } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isRecruiter, createCompany);

router.route("/").get(isAuthenticated, getCompanies);

router.route("/:id").get(isAuthenticated, getCompanyById);

router.route("/:id").put(isAuthenticated, isRecruiter, updateCompany);

router.route("/:id").delete(isAuthenticated, isRecruiter, deleteCompany);

export default router;
