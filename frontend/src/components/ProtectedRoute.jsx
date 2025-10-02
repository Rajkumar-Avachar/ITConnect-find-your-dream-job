import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux"; 

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useSelector((state) => state.auth); 

  if (!user) {
    
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "jobseeker") {
      return <Navigate to="/" replace />; 
    } else if (user.role === "employer") {
      return <Navigate to="/employer" replace />; 
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;
