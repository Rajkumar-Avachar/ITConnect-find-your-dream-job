import mongoose from "mongoose";
import { Company } from "../model/company.model.js";

//Create Company
export const createCompany = async (req, res) => {
  try {
    const { name, about, website, location } = req.body;
    if (!name?.trim()) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    const existingCompany = await Company.findOne({ name: name });
    if (existingCompany) {
      return res.status(400).json({
        message: "A company with this name already exists",
        success: false,
      });
    }

    const companyData = {};
    companyData.name = name;
    if (about) companyData.about = about;
    if (website) companyData.website = website;
    if (location) companyData.location = location;
    companyData["employers"] = [req.user.userId];
    const company = await Company.create(companyData);

    return res.status(201).json({
      message: "Company created successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get all companies
export const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}).sort({ createdAt: -1 });
    if (companies.length === 0) {
      return res.status(404).json({
        message: "Companies Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get companies created by employer
export const getCompanies = async (req, res) => {
  try {
    const userId = req.user.userId;
    const companies = await Company.find({ employers: userId }).sort({
      createdAt: -1,
    });
    if (companies.length === 0) {
      return res.status(404).json({
        message: "You have not created any Company yet",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get a single company by id
export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Company ID",
        success: false,
      });
    }
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Update Company detais
export const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Company ID",
        success: false,
      });
    }
    const { name, about, website, location } = req.body;

    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        message: "Company Not Found",
        success: false,
      });
    }
    if (!company.employers.includes(req.user.userId)) {
      return res.status(403).json({
        message: "You are not authorized to update this company",
        success: false,
      });
    }

    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        message: "At least one field is required to update the company details",
        success: false,
      });
    }

    if (name !== undefined) {
      if (!name.trim()) {
        return res.status(400).json({
          message: "Company Name is required",
          success: false,
        });
      }
      const isDuplicateName = await Company.findOne({ name, _id: { $ne: id } });
      if (isDuplicateName) {
        return res.status(400).json({
          message: "Company name already exists",
          success: false,
        });
      }
    }

    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (about !== undefined) updatedFields.about = about;
    if (website !== undefined) updatedFields.website = website;
    if (location !== undefined) updatedFields.location = location;

    const updatedCompany = await Company.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      message: "Company updated successfully",
      company: updatedCompany,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Delete Company
export const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid Company ID",
        success: false,
      });
    }
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    if (!company.employers.includes(req.user.userId)) {
      return res.status(403).json({
        message: "You are not authorized to delete this company",
        success: false,
      });
    }

    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
