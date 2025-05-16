import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    about: {
      type: String,
      default: "",
    },
    website: {
      type: String,
    },
    location: {
      type: String,
    },
    logo: {
      type: String,
      default: "",
    },
    recruiters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
