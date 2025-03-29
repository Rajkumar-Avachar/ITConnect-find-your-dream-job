import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const validateURL = (url) => {
  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)\S*$/;
  return urlRegex.test(url);
};

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
      enum: ["applicant", "recruiter"],
      required: true,
    },
    isVerified: { type: Boolean, default: false },
    profile: {
      bio: { type: String, maxlength: 500, default: "" },
      skills: { type: [String], default: [] },
      resume: { type: String, default: "" },
      resumeOriginalName: { type: String, default: "" },
      profilePhoto: { type: String, default: "" },
      experienceLevel: {
        type: String,
        enum: ["fresher", "experienced"],
        default: "fresher",
      },
      location: { type: String, default: "" },
      github: {
        type: String,
        default: "",
        validate: { validator: validateURL, message: "Invalid GitHub URL" },
      },
      portfolio: {
        type: String,
        default: "",
        validate: { validator: validateURL, message: "Invalid Portfolio URL" },
      },
    },

    //For Recruiters
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      default: null,
    },
    companyWebsite: {
      type: String,
      default: "",
      validate: { validator: validateURL, message: "Invalid website URL" },
    },
    position: { type: String, default: "" },
    linkedin: {
      type: String,
      default: "",
      validate: { validator: validateURL, message: "Invalid LinkedIn URL" },
    },
  },
  { timestamps: true }
);

// **Hash Password Before Saving**
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// **Compare Password for Login**
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", userSchema);
