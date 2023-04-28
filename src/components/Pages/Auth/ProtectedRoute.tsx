import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

export const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/home"
}: IProtectedRoute) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export interface IProtectedRoute{
  isAllowed: boolean,
  redirectTo?: string
}