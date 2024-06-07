import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";

const PrivateRoutes = () => {
  const authValue = useAuth();
  const location = useLocation();
  return authValue?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
