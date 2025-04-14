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
import Profile from "./pages/applicant/Profile";
import UpdateProfile from "./pages/applicant/UpdateProfile";
import JobsPage from "./pages/jobs/JobsPage";
import Companies from "./pages/companies/Companies";


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update-profile" element={<UpdateProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />

        {/* Dashboard Nested Routes
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route> */}
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
