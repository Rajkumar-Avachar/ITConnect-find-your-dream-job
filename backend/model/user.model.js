import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["jobseeker", "employer"],
      required: true,
    },
    profile: {
      headline: { type: String, default: "" },
      about: { type: String, maxlength: 2000, default: "" },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
      },
      skills: { type: [String], default: [] },
      resume: { type: String, default: "" },
      profilePhoto: { type: String, default: "" },
      location: { type: String, default: "" },
      github: {
        type: String,
        default: "",
      },
      portfolio: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
    },

    //For Employers
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    // companyWebsite: {
    //   type: String,
    //   default: "",
    //   validate: { validator: validateURL, message: "Invalid website URL" },
    // },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
