import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
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
      lowercase: true,
    },
    phoneNumber: {
      type: Number,
    },
    profile: {
      profilePhoto: { type: String, default: "" },
      headline: { type: String, default: "" },
      resume: { type: String, lowercase: true, default: "" },
      location: { type: String, default: "" },
      // gender: {
      //   type: String,
      //   enum: ["male", "female", "other", ""],
      //   default: "",
      // },
      portfolio: {
        type: String,
        default: "",
      },
      github: {
        type: String,
        lowercase: true,
        default: "",
      },
      linkedin: {
        type: String,
        lowercase: true,
        default: "",
      },
      about: { type: String, maxlength: 2000, default: "" },
      skills: { type: [String], default: [] },
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
