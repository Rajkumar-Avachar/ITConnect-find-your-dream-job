import { Job } from "../model/job.model.js";
import { Company } from "../model/company.model.js";

//Create Job
export const createJob = async (req, res) => {
  try {
    const employerId = req.user.userId;

    const company = await Company.findOne({ employer: employerId });

    if (!company) {
      return res.status(403).json({
        message: "You are not associated with any company",
        success: false,
      });
    }

    const {
      title,
      location,
      salary,
      experience,
      jobType,
      workMode,
      openings,
      description,
      responsibilities,
      eligibility,
      skills,
    } = req.body;

    const cleaned = {
      title: title?.trim().replace(/\s+/g, " "),
      location: location?.trim().replace(/\s+/g, " "),
      salary:
        salary && salary.trim().replace(/\s+/g, " ") !== ""
          ? salary.trim().replace(/\s+/g, " ")
          : "Not Disclosed",
      experience:
        experience && experience.trim().replace(/\s+/g, " ") !== ""
          ? experience.trim().replace(/\s+/g, " ")
          : "0 years",
      jobType: jobType?.trim().replace(/\s+/g, ""),
      workMode: workMode?.trim().replace(/\s+/g, ""),
      openings: openings,
      description: description?.trim().replace(/\s+/g, " "),
      responsibilities: responsibilities?.trim().replace(/\s+/g, " "),
      eligibility: eligibility?.trim().replace(/\s+/g, " "),
      // skills: skills?.trim().replace(/\s+/g, " "),
      skills: skills
        ? skills
            .split(",")
            .map((skill) => skill.trim().replace(/\s+/g, " "))
            .filter((skill) => skill.length > 0)
        : [],
    };

    if (!cleaned.title || !cleaned.location) {
      return res.status(400).json({
        message: "Title and location are required",
        success: false,
      });
    }
    const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
    const validWorkModes = ["Onsite", "Remote", "Hybrid"];

    if (
      cleaned.jobType !== undefined &&
      !validJobTypes.includes(cleaned.jobType)
    ) {
      return res.status(400).json({
        message: `Invalid Job Type. Valid types are: ${validJobTypes.join(
          ", "
        )}`,
        success: false,
      });
    }

    if (
      cleaned.workMode !== undefined &&
      !validWorkModes.includes(cleaned.workMode)
    ) {
      return res.status(400).json({
        message: `Invalid Work Mode. Valid modes are: ${validWorkModes.join(
          ", "
        )}`,
        success: false,
      });
    }

    const newJob = new Job({
      title: cleaned.title,
      company: company._id,
      location: cleaned.location,
      salary: cleaned.salary,
      experience: cleaned.experience,
      jobType: cleaned.jobType,
      workMode: cleaned.workMode,
      openings: cleaned.openings,
      description: cleaned.description,
      responsibilities: cleaned.responsibilities,
      eligibility: cleaned.eligibility,
      skills: cleaned.skills,
      postedBy: employerId,
    });

    await newJob.save();

    return res.status(201).json({
      message: "Job created successfully",
      job: newJob,
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

//Get all Jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("company", "name")
      .sort({ createdAt: -1 });

    if (jobs.length === 0) {
      return res.status(200).json({
        message: "Jobs not Found",
        success: true,
      });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get a single job by id
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
      .populate("applications", "applicant")
      .populate("company", "name about");
    if (!job) {
      return res.status(404).json({
        message: "Job not Found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
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

// Get all jobs posted by employer
export const getJobsByEmployer = async (req, res) => {
  try {
    const employerId = req.user.userId;
    const jobs = await Job.find({ postedBy: employerId }).sort({
      createdAt: -1,
    });

    if (jobs.length === 0) {
      return res.status(200).json({
        message: "You have not posted any Job",
        success: true,
      });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Update Job
export const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const employerId = req.user.userId;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (!job.postedBy || job.postedBy.toString() !== employerId.toString()) {
      return res.status(403).json({
        message: "You are not authorized to update this job",
        success: false,
      });
    }

    const {
      title,
      location,
      salary,
      experience,
      jobType,
      workMode,
      openings,
      description,
      responsibilities,
      eligibility,
      skills,
    } = req.body;

    const cleaned = {
      title: title?.trim().replace(/\s+/g, " "),
      location: location?.trim().replace(/\s+/g, " "),
      salary:
        salary?.trim().replace(/\s+/g, " ") !== ""
          ? salary?.trim().replace(/\s+/g, " ")
          : "Not Disclosed",
      experience:
        experience?.trim().replace(/\s+/g, " ") !== ""
          ? experience?.trim().replace(/\s+/g, " ")
          : "0 years",
      jobType: jobType?.trim().replace(/\s+/g, ""),
      workMode: workMode?.trim().replace(/\s+/g, ""),
      openings: openings,
      description: description?.trim().replace(/\s+/g, " "),
      responsibilities: responsibilities?.trim().replace(/\s+/g, " "),
      eligibility: eligibility?.trim().replace(/\s+/g, " "),
      skills: skills
        ?.split(",")
        .map((skill) => skill.trim().replace(/\s+/g, " "))
        .filter((skill) => skill.length > 0),
    };

    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        message: "At least one field is required to update company details",
        success: false,
      });
    }

    if (cleaned.title !== undefined && !cleaned.title) {
      return res.status(400).json({
        message: "Job title is required",
        success: false,
      });
    }
    if (cleaned.location !== undefined && !cleaned.location) {
      return res.status(400).json({
        message: "Job location is required",
        success: false,
      });
    }

    const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
    const validWorkModes = ["Onsite", "Remote", "Hybrid"];

    if (
      cleaned.jobType !== undefined &&
      !validJobTypes.includes(cleaned.jobType)
    ) {
      return res.status(400).json({
        message: `Invalid Job Type. Valid job types are: ${validJobTypes.join(
          ", "
        )}`,
        success: false,
      });
    }

    if (
      cleaned.workMode !== undefined &&
      !validWorkModes.includes(cleaned.workMode)
    ) {
      return res.status(400).json({
        message: `Invalid Work Mode. Valid work modes are: ${validWorkModes.join(
          ", "
        )}`,
        success: false,
      });
    }

    const updatedJob = await Job.findByIdAndUpdate(
      jobId,
      { $set: cleaned },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      message: "Job updated successfully",
      job: updatedJob,
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

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (!job.postedBy || job.postedBy.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this job",
        success: false,
      });
    }

    await Job.findByIdAndDelete(jobId);

    return res.status(200).json({
      message: "Job deleted successfully",
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
