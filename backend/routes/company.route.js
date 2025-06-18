import express from "express";
import {
  createCompany,
  getCompanies,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated, isEmployer } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isEmployer, createCompany);

router.route("/all-companies").get(isAuthenticated, getAllCompanies);

router.route("/your-company").get(isAuthenticated, isEmployer, getCompanies);

router.route("/:id").get(isAuthenticated, getCompanyById);

router.route("/:id").put(isAuthenticated, isEmployer, updateCompany);

router.route("/:id").delete(isAuthenticated, isEmployer, deleteCompany);

export default router;
