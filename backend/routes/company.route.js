import express from "express";
import {
  createCompany,
  getCompanies,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated, isRecruiter } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isRecruiter, createCompany);

router.route("/all-companies").get(isAuthenticated, getAllCompanies);

router.route("/").get(isAuthenticated, isRecruiter, getCompanies);

router.route("/:id").get(isAuthenticated, getCompanyById);

router.route("/:id").put(isAuthenticated, isRecruiter, updateCompany);

router.route("/:id").delete(isAuthenticated, isRecruiter, deleteCompany);

export default router;
