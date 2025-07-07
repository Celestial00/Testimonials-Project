import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRoutes() {
  const token = Cookies.get("token");
  return token !== undefined ? <Outlet /> : <Navigate to="/admin" />;
}
