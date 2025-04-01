import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized access",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};

export const isRecruiter = (req, res, next) => {
  if (req.user.role !== "recruiter") {
    return res.status(403).json({
      message: "You are not a Recruiter",
      success: false,
    });
  }
  next();
};
