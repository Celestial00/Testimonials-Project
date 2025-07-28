import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Mainlayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-blue-200">
      <Navbar />

      <div className="flex-grow my-10 ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
