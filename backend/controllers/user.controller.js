import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Register User
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
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
    const registeredPhoneNumber = await User.findOne({ phoneNumber });
    if (registeredPhoneNumber) {
      return res.status(400).json({
        message: "Phone number already registered!",
        success: false,
      });
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({
        message: "Phone number must be exactly 10 digits",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
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
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all the details",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with the current role",
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
    const { data } = req.body;
    if (!Object.keys(data).length) {
      return res.status(400).json({
        message: "At least one field is required to update the profile",
        success: false,
      });
    }

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
    } = data;

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

    updatedFields.fullname = fullname;

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
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// //Update Profile
// export const updateProfile = async (req, res) => {
//   try {
//     const { fullname, email, phoneNumber, bio, skills } = req.body;
//     const file = req.file;

//     // if (!fullname || !email || !phoneNumber || !bio || !skills) {
//     //   return res.status(400).json({
//     //     message: "Something is missing",
//     //     success: false,
//     //   });
//     // }

//     if (!Object.keys(req.body).length) {
//       return res.status(400).json({
//         message: "At least one field is required to update the profile",
//         success: false,
//       });
//     }

//     //cloudinary will come here

//     // const skillsArray = skills.split(",");

//     const userId = req.user.userId;
//     let user = await User.findById(userId);

//     if (!user) {
//       return res.status(400).json({
//         message: "Please login to update profile",
//         success: false,
//       });
//     }

//     //updating profile data

//     // user.fullname = fullname;
//     // user.email = email;
//     // user.phoneNumber = phoneNumber;
//     // user.profile.bio = bio;
//     // user.profile.skills = skillsArray;
//     //resume

//     // const updatedFields = {
//     //   fullname,
//     //   email,
//     //   phoneNumber,
//     //   "profile.bio": bio,
//     //   "profile.skills": skills.split(","),
//     // };

//     const updatedFields = {};
//     if (fullname) updatedFields.fullname = fullname;
//     if (email) updatedFields.email = email;
//     if (phoneNumber) updatedFields.phoneNumber = phoneNumber;
//     if (bio) updatedFields["profile.bio"] = bio;
//     if (skills) updatedFields["profile.skills"] = skills.split(",");

//     const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, {
//       new: true,
//       runValidators: true,
//     });

//     if (!updatedUser) {
//       return res.status(404).json({
//         message: "User not found",
//         success: false,
//       });
//     }

//     return res.status(200).json({
//       message: "Profile updated successfully",
//       user: updatedUser,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Internal Server Error",
//       success: false,
//     });
//   }
// };
