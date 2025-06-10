import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User
export const register = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;
    if (!fullname || !email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all details",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Email already registered",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    });

    return res.status(201).json({
      message: "Account created successfully",
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

//Login User
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the details",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
      role: user.role,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user: userData,
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

//Logout User
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
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

//Update Profile
export const updateProfile = async (req, res) => {
  try {
    const {
      fullname,
      headline,
      location,
      gender,
      email,
      phoneNumber,
      about,
      skills,
      portfolio,
      github,
      linkedin,
      resume,
    } = req.body;

    const profilePhotoUrl =
      req.file?.path || (req.body.profilePhoto === "null" ? null : undefined);

    if (!Object.keys(req.body).length && !profilePhotoUrl) {
      return res.status(400).json({
        message: "At least one field is required to update the profile",
        success: false,
      });
    }

    if (fullname !== undefined && !fullname.trim()) {
      return res.status(400).json({
        message: "Full Name is required",
        success: false,
      });
    }

    if (email !== undefined && !email.trim()) {
      return res.status(400).json({
        message: "Email is required",
        success: false,
      });
    }

    if (phoneNumber !== undefined && !phoneNumber.toString().trim()) {
      return res.status(400).json({
        message: "Phone number is required",
        success: false,
      });
    }

    const userId = req.user.userId;
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "Please login to update profile",
        success: false,
      });
    }

    const updatedFields = {};

    if (profilePhotoUrl !== undefined)
      updatedFields["profile.profilePhoto"] = profilePhotoUrl;

    if (fullname !== undefined) updatedFields.fullname = fullname;

    if (headline !== undefined) updatedFields["profile.headline"] = headline;

    if (location !== undefined) updatedFields["profile.location"] = location;

    if (gender !== undefined && gender !== "")
      updatedFields["profile.gender"] = gender;

    updatedFields.email = email;

    updatedFields.phoneNumber = phoneNumber;

    if (about !== undefined) updatedFields["profile.about"] = about;

    if (portfolio !== undefined) updatedFields["profile.portfolio"] = portfolio;
    if (github !== undefined) updatedFields["profile.github"] = github;
    if (linkedin !== undefined) updatedFields["profile.linkedin"] = linkedin;
    if (resume !== undefined) updatedFields["profile.resume"] = resume;

    if (skills !== undefined) {
      updatedFields["profile.skills"] =
        skills.trim() === ""
          ? []
          : skills.split(",").map((skill) => skill.trim());
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
      new: true,
      runValidators: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern?.phoneNumber) {
      return res.status(400).json({
        message: "Phone number already exists",
        success: false,
      });
    }
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
