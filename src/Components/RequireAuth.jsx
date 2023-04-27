import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectedUser } from "../Features/loginSlice";

function RequireAuth() {
  const user = useSelector(selectedUser);
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}

export default RequireAuth;
