// ❌ This is not needed unless you're using nested dashboard pages
// If needed, rename to DashboardLayout
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return <Outlet />;
}
