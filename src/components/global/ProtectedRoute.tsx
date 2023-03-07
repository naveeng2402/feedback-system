import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext, type IAuthContext } from "@/context/auth";
import { useContext, useEffect, useState } from "react";
import type { Roles } from "@/types";
import Error403 from "./Error403";

/**
 * Creates a check which check for logged in users and
 * also their roles to provide access to routes
 */
const ProtectedRoute = ({ roles }: { roles: Roles[] }) => {
  const { auth } = useContext(AuthContext) as IAuthContext;

  // For testing
  // const auth = {
  //   session: { status: true },
  //   user: { user_metadata: { role: "staff" } },
  // };

  const location = useLocation();

  // console.log(JSON.stringify(auth));
  return auth.user &&
    roles.includes(auth.user.user_metadata["role"] as Roles) ? (
    <Outlet />
  ) : auth.session ? (
    <Error403 />
  ) : (
    // <Navigate to="/error" state={{ from: location }} replace />
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
