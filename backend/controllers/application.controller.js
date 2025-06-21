import { Application } from "../model/application.model.js";
import { Job } from "../model/job.model.js";
import mongoose from "mongoose";

//Apply for a Job
export const applyJob = async (req, res) => {
  try {
    const applicantId = req.user.userId;
    const { jobId, resume } = req.body;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid Job id",
        success: false,
      });
    }

    if (!jobId.trim() || !resume.trim()) {
      return res.status(400).json({
        message: "Job id and resume are required",
        success: false,
      });
    }

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not Found",
        success: false,
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: applicantId,
    });

    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    const application = await Application.create({
      applicant: applicantId,
      job: jobId,
      resume: resume,
    });

    job.applications.push(application._id);
    await job.save();

    return res.status(201).json({
      message: "Job Application submitted successfully",
      application,
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

// Get all applications by an applicant
export const getApplicationsByApplicant = async (req, res) => {
  try {
    const applicantId = req.user.userId;

    const applications = await Application.find({ applicant: applicantId })
      .populate({
        path: "job",
        select: "title company",
        populate: { path: "company", select: "name" },
      })
      .sort({ appliedAt: -1 });

    if (applications.length === 0) {
      return res.status(200).json({
        message: "You have not applied for any job",
        success: true,
      });
    }

    return res.status(200).json({ applications, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get all applications for Employer
export const getApplicationsForEmployer = async (req, res) => {
  try {
    const employerId = req.user.userId;
    const jobId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid job id",
        success: false,
      });
    }

    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    if (!job.postedBy || job.postedBy.toString() !== employerId) {
      return res.status(403).json({
        message: "You are not authorized to view applications for this job",
        success: false,
      });
    }

    const applications = await Application.find({ job: jobId })
      .populate("applicant", "fullname email")
      .sort({ createdAt: -1 });

    if (applications.length === 0) {
      return res.status(200).json({
        message: "No applications found for this job",
        success: true,
      });
    }

    return res.status(200).json({
      applications,
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

//Update application status
export const updateApplicationStatus = async (req, res) => {
  try {
    const applicationId = req.params.id;
    let { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(applicationId)) {
      return res.status(400).json({
        message: "Invalid application id",
        success: false,
      });
    }

    status = status?.trim().toLowerCase();

    if (!status) {
      return res.status(400).json({
        message: "Please provide status value",
        success: false,
      });
    }

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value. Status must be accepted or rejected",
        success: false,
      });
    }

    const application = await Application.findById(applicationId).populate(
      "job"
    );
    if (!application) {
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }

    if (application.job.postedBy.toString() !== req.user.userId) {
      return res.status(403).json({
        message:
          "You are not authorized to update the status of this application",
        success: false,
      });
    }

    application.status = status;
    await application.save();

    return res.status(200).json({
      message: "Application status updated successfully",
      application,
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

// Cancel application
export const cancelApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const applicantId = req.user.userId;

    if (!mongoose.Types.ObjectId.isValid(applicationId)) {
      return res.status(400).json({
        message: "Invalid application id",
        success: false,
      });
    }

    const application = await Application.findOne({
      _id: applicationId,
      applicant: applicantId,
    });

    if (!application) {
      return res.status(404).json({
        message: "Application Not Found",
        success: false,
      });
    }

    if (["accepted", "rejected"].includes(application.status)) {
      return res.status(400).json({
        message:
          "You cannot cancel an application that has been accepted or rejected",
        success: false,
      });
    }

    await Job.findByIdAndUpdate(application.job, {
      $pull: { applications: application._id },
    });

    await Application.findByIdAndDelete(applicationId);

    return res.status(200).json({
      message: "Application cancelled successfully",
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
