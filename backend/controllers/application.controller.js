import { Application } from "../model/application.model.js";
import { Job } from "../model/job.model.js";

//Apply for a Job (Applicant only )
export const applyJob = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { jobId } = req.body;

    //check if the job is exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not Found",
        success: false,
      });
    }
    //check if the user has already applied for this job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "You have already applied for this job",
        success: false,
      });
    }
    //create a new application
    const application = await Application.create({
      job: jobId,
      applicant: userId,
    });

    // Add application reference to job
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

// Get all applications by an applicant (Applicant only)
export const getApplicationsByApplicant = async (req, res) => {
  try {
    const userId = req.user.userId;

    const applications = await Application.find({ applicant: userId })
      .populate({
        path: "job",
        select: "title",
        populate: { path: "company", select: "name location" },
      })
      .populate("applicant", "fullname email")
      .sort({ appliedAt: -1 });

    if (!applications) {
      return res.status(400).json({
        message: "You have not applied for any job",
        success: false,
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

//Get all applications for a employer (employer only)
export const getApplicationsForEmployer = async (req, res) => {
  try {
    const employerId = req.user.userId;
    const jobId = req.params.id;

    // Check if the job exists and belongs to the employer
    const job = await Job.findOne({
      _id: jobId,
      createdBy: employerId,
    }).populate({
      path: "applications",
      options: { sort: { createdAt: 1 } },
      populate: {
        path: "applicant",
        select: "fullname email",
      },
    });

    if (!job) {
      return res.status(404).json({
        message:
          "Job not found or you are not authorized to view applications for this job",
        success: false,
      });
    }

    return res.status(200).json({
      applications: job.applications,
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

//Update application status (employer only)
export const updateApplicationStatus = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;

    // Validate status
    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status value",
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

    // Ensure only the employer who posted the job can update the application status
    if (application.job.createdBy.toString() !== req.user.userId) {
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

// Cancel application (Applicant only)
export const cancelApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const applicantId = req.user.userId;

    const application = await Application.findOne({
      _id: id,
      applicant: applicantId,
    });
    if (!application) {
      return res.status(404).json({
        message: "Application not found or you are not authorized to cancel it",
        success: false,
      });
    }

    // Remove the application from the job's application list
    await Job.findByIdAndUpdate(application.job, {
      $pull: { applications: id },
    });
    await Application.findByIdAndDelete(id);

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
