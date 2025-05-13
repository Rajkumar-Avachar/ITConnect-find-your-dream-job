import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/error/Error";
import ScrollToTop from "./utils/ScrollToTop";
import Dashboard from "./pages/applicant/Dashboard";
import ProfilePage from "./pages/applicant/ProfilePage";
import JobsPage from "./pages/jobs/JobsPage/JobsPage";
import Companies from "./pages/companies/Companies";
import JobDetailsPage from "./pages/jobs/JobDetailsPage/JobDetailsPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/job/:id" element={<JobDetailsPage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
