import { Job } from "../model/job.model.js";
import { Company } from "../model/company.model.js";

//Create Job
export const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobType,
      minSalary,
      maxSalary,
      openings,
      description,
      responsibilities,
      eligibility,
      skillsRequired,
    } = req.body;

    const employerId = req.user.userId;

    const isCompany = await Company.findOne({ createdBy: employerId });

    if (!isCompany) {
      return res.status(403).json({
        message: "You are not associated with any company",
        success: false,
      });
    }

    if (company !== isCompany.name) {
      return res.status(403).json({
        message: "You can only post jobs for your associated company",
        success: false,
      });
    }

    const requiredFields = [
      "title",
      "company",
      "location",
      "jobType",
      "minSalary",
      "maxSalary",
      "openings",
      "description",
      "responsibilities",
      "eligibility",
      "skillsRequired",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          message: `${field} is required`,
          success: false,
        });
      }
    }

    const job = await Job.create({
      title,
      company: isCompany._id,
      location,
      jobType,
      minSalary,
      maxSalary,
      openings,
      description,
      responsibilities,
      eligibility,
      skillsRequired:
        typeof skillsRequired === "string"
          ? skillsRequired.split(",").map((s) => s.trim())
          : [],
    });

    return res.status(201).json({
      message: "Job created successfully",
      job,
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
      .sort({ createdAt: -1 })
      .populate("company", "name")
      .populate("createdBy", "fullname");

    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not Found",
        success: false,
      });
    }
    return res.status(200).json({ jobs, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: true,
    });
  }
};

//Get a single job bt id
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({
        message: "Job not Found",
        success: true,
      });
    }
    return res.status(200).json({
      job,
      succcess: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: true,
    });
  }
};

// Get all jobs created by employer (for employers only)
export const getJobsByEmployer = async (req, res) => {
  try {
    const employerId = req.user.userId;
    const jobs = await Job.find({ createdBy: employerId }).sort({
      createdAt: 1,
    });
    if (jobs.length === 0) {
      return res.status(404).json({
        message: "You have not created any Job",
        success: false,
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

// // Update job details
// export const updateJob = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedFields = req.body;

//     const job = await Job.findById(id);
//     if (!job) {
//       return res.status(404).json({
//         message: "Job not found",
//         success: false,
//       });
//     }
//     if (!job.createdBy || job.createdBy.toString() !== req.user.userId) {
//       return res.status(403).json({
//         message: "You are not authorized to update this job",
//         success: false,
//       });
//     }

//     const updatedJob = await Job.findByIdAndUpdate(id, updatedFields, {
//       new: true,
//       runValidators: true,
//     });

//     return res.status(200).json({
//       message: "Job updated successfully",
//       job: updatedJob,
//       success: true,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       message: "Internal Server Error",
//       success: false,
//     });
//   }
// };

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (!job.createdBy || job.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to update this job",
        success: false,
      });
    }

    const jobData = [
      "title",
      "company",
      "location",
      "jobType",
      "minSalary",
      "maxSalary",
      "openings",
      "description",
      "responsibilities",
      "eligibility",
      "skillsRequired",
    ];

    const updatedFields = {};

    jobData.forEach((key) => {
      if (req.body[key] !== undefined) {
        updatedFields[key] = req.body[key];
      }
    });

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { $set: updatedFields },
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
    const { id } = req.params;

    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    if (!job.createdBy || job.createdBy.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not authorized to delete this job",
        success: false,
      });
    }

    await Job.findByIdAndDelete(id);

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
