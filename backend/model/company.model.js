import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    logo: {
      type: String,
      default: "",
    },
    industry: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    foundedYear: {
      type: Number,
      min: 1800,
      max: new Date().getFullYear(),
      default: null,
    },
    website: {
      type: String,
    },
    about: {
      type: String,
      maxlength: 2000,
      default: "",
    },
    specialities: {
      type: String,
      default: "",
      maxlength: 1000,
    },
    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // recruiters: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Company = mongoose.model("Company", companySchema);
