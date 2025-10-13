import express from "express";
// import cookie from "cookie-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
import userRoutes from "./routes/user.route.js";
import companyRoutes from "./routes/company.route.js";
import jobRoutes from "./routes/job.route.js";
import applicationRoutes from "./routes/application.route.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://jobgrids.onrender.com"
        : "http://localhost:5173",
    credentials: true,
  })
);


// app.use(cors({
//   origin: "https://itconnect.vercel.app",
//   credentials: true
// }));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//DB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};
connectDB();

//apis
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/companies", companyRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/applications", applicationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
