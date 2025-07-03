import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuthenticated = true; // Replace with real auth logic
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
