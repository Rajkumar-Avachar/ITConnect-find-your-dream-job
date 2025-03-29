import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
    default: [],
  },
  skillsRequired: {
    type: [String],
    default: [],
  },
  salary: {
    type: Number,
    currency: { type: String, default: "Rs" },
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  recruiter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
  status: {
    type: String,
    enum: ["Open", "Closed"],
    default: "Open",
  },
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Job = mongoose.model("Job", jobSchema);
