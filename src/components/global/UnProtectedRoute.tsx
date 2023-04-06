import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, type IAuthContext } from "@/context/auth";
import { useContext, useEffect, useState } from "react";
import type { Roles } from "@/types";
import Error403 from "./Error403";

/**
 * Creates a check which check for logged in users and
 * also their roles to provide access to routes
 */
const UnProtectedRoute = () => {
  const { auth } = useContext(AuthContext) as IAuthContext;

  const location = useLocation();
  const role = auth?.user?.user_metadata["role"] as string;
  const getRoute = () => {
    switch (role) {
      case "stud":
        return (
          <Navigate to="/stud/dashboard" state={{ from: location }} replace />
        );
      case "admin":
        return (
          <Navigate to="/admin/dashboard" state={{ from: location }} replace />
        );
      case "staff":
        <Navigate to="/staff/dashboard" state={{ from: location }} replace />;
      default:
        return (
          <Navigate to="/stud/dashboard" state={{ from: location }} replace />
        );
    }
  };

  return !auth.user ? <Outlet /> : getRoute();
};

export default UnProtectedRoute;
