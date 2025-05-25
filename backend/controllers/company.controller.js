import { Company } from "../model/company.model.js";

//Create Company
export const createCompany = async (req, res) => {
  try {
    const { companyName, about, website, location } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    const existingCompany = await Company.findOne({ name: companyName });
    if (existingCompany) {
      return res.status(400).json({
        message: "A company with this name already exists",
        success: false,
      });
    }

    const companyData = {};
    if (companyName) companyData.name = companyName;
    if (about) companyData.about = about;
    if (website) companyData.website = website;
    if (location) companyData.location = location;
    companyData.createdBy = req.user.userId;
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
    const companies = await Company.find({});
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
    const companies = await Company.find({ createdBy: userId }).sort({
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
    const { companyName, about, website, location } = req.body;
    const file = req.file;

    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        message: "At least one field is required to update the company details",
        success: false,
      });
    }

    const updatedFields = {};
    if (companyName) updatedFields.name = companyName;
    if (about) updatedFields.about = about;
    if (website) updatedFields.website = website;
    if (location) updatedFields.location = location;

    const updatedCompany = await Company.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedCompany) {
      return res.status(404).json({
        message: "Company Not Found",
        success: false,
      });
    }

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
