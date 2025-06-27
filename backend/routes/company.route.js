import express from "express";
import {
  createCompany,
  getAllCompanies,
  getCompanyById,
  getCompanyByEmployer,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import { isAuthenticated, isEmployer } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(isAuthenticated, isEmployer, createCompany);

router.route("/").get(getAllCompanies);

router
  .route("/your-company")
  .get(isAuthenticated, isEmployer, getCompanyByEmployer);

router.route("/:id").get(getCompanyById);

router.route("/:id").put(isAuthenticated, isEmployer, updateCompany);

router.route("/:id").delete(isAuthenticated, isEmployer, deleteCompany);

export default router;
