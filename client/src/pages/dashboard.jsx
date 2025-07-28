import React, { useEffect, useState } from "react";
import { User, LogOut, Folder } from "lucide-react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Testimonials from "./Testimonials";
import Department from "./Departments";

export default function Dashboard() {
  const nav = useNavigate();



  const [tab, setTab] = useState("Test");

  const handleLogout = () => {
    Cookies.remove("token");
    nav("/admin");
  };



  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-800 text-white p-6 hidden md:flex flex-col gap-8">
        <div className="text-2xl font-bold text-blue-400 mb-6">Logo</div>

        <nav className="flex flex-col gap-1">
          <a
            onClick={() => setTab("Test")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              tab === "Test"
                ? "bg-gray-700 text-blue-400"
                : "hover:bg-gray-700 transition-colors"
            }  cursor-pointer`}
          >
            <Folder className="w-5 h-5" />
            <span>All Testimonials</span>
          </a>

          <a
            onClick={() => setTab("Dep")}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
              tab !== "Test"
                ? "bg-gray-700 text-blue-400"
                : "hover:bg-gray-700 transition-colors"
            } cursor-pointer`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Departments</span>
          </a>
        </nav>

        <div className="mt-auto text-gray-400 text-sm flex flex-col gap-2">
          <a
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors hover:text-red-400 cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex gap-4 items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        {tab === "Test" ? <Testimonials  /> : <Department />}
      </div>
    </div>
  );
}
