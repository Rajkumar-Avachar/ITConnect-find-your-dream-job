// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Homepage from "./pages/home/Homepage";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./utils/ScrollToTop";
// import Dashboard from "./pages/jobseeker/Dashboard";
// import ProfilePage from "./pages/jobseeker/ProfilePage";
// import JobsPage from "./pages/jobs/jobs/JobsPage";
// import JobDetailsPage from "./pages/jobs/jobdetails/JobDetailsPage";
// import CompaniesPage from "./pages/companies/companies/CompaniesPage";
// import CompanyDetailsPage from "./pages/companies/companydetails/CompanyDetailsPage";
// import EmpDashboard from "./pages/employer/Dashboard";

// import { Outlet } from "react-router-dom";
// import PageNotFound from "./components/PageNotFound";
// import PageNotFound2 from "./pages/employer/components/PageNotFound2";
// import ProtectedRoute from "./components/ProtectedRoute";

// function MainLayout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// function OtherLayout() {
//   return <Outlet />;
// }

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         {/* Routes with Navbar and Footer */}
//         <Route element={<ProtectedRoute allowedRoles={["jobseeker"]} />}>
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<Homepage />} />
//             <Route path="profile" element={<ProfilePage />} />
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="jobs" element={<JobsPage />} />
//             <Route path="job/:id" element={<JobDetailsPage />} />
//             <Route path="companies" element={<CompaniesPage />} />
//             <Route path="company/:id" element={<CompanyDetailsPage />} />
//           </Route>
//         </Route>

//         {/* Routes without Navbar and Footer */}
//         <Route path="" element={<OtherLayout />}>
//           <Route path="login" element={<Login />} />
//           <Route path="signup" element={<Signup />} />
//           <Route element={<ProtectedRoute allowedRoles={["employer"]} />}>
//             <Route path="employer/*" element={<EmpDashboard />} />
//           </Route>
//           <Route path="*" element={<PageNotFound2 />} />
//         </Route>
//       </Routes>
//       <ToastContainer />
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";

import Dashboard from "./pages/jobseeker/Dashboard";
import ProfilePage from "./pages/jobseeker/ProfilePage";
import JobsPage from "./pages/jobs/jobs/JobsPage";
import JobDetailsPage from "./pages/jobs/jobdetails/JobDetailsPage";
import CompaniesPage from "./pages/companies/companies/CompaniesPage";
import CompanyDetailsPage from "./pages/companies/companydetails/CompanyDetailsPage";

import EmpDashboard from "./pages/employer/Dashboard";

import PageNotFound from "./components/PageNotFound";

import ProtectedRoute from "./components/ProtectedRoute";
import { Outlet } from "react-router-dom";

// Layouts
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function OtherLayout() {
  return <Outlet />;
}

// App
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="job/:id" element={<JobDetailsPage />} />
          <Route path="companies" element={<CompaniesPage />} />
          <Route path="company/:id" element={<CompanyDetailsPage />} />
        </Route>

        {/* Jobseeker Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["jobseeker"]} />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>

        {/* Employer Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["employer"]} />}>
          <Route path="employer/*" element={<EmpDashboard />} />
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
