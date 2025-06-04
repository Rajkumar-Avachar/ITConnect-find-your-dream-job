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
import Dashboard from "./pages/jobseeker/Dashboard";
import ProfilePage from "./pages/jobseeker/ProfilePage";
import JobsPage from "./pages/jobs/JobsPage/JobsPage";
import Companies from "./pages/companies/Companies";
import JobDetailsPage from "./pages/jobs/JobDetailsPage/JobDetailsPage";

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function AuthLayout() {
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="job/:id" element={<JobDetailsPage />} />
          <Route path="companies" element={<Companies />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* Routes without Navbar and Footer */}
        <Route path="" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
