import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      default: "Not Disclosed",
    },
    experience: {
      type: String,
      default: "0 years",
    },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship"],
    },
    workMode: {
      type: String,
      enum: ["Onsite", "Remote", "Hybrid"],
    },
    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
    openings: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
      default: "",
    },
    responsibilities: {
      type: String,
      default: "",
    },
    eligibility: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
