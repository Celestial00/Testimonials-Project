// Dashboard.jsx
import { Settings, User, LogOut, Folder, Search } from "lucide-react";
import TestimonialCardAdmin from "../components/TestimonialCardAdmin";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const nav = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const { data } = useFetch("admin", refresh);

  const handleLogout = () => {
    Cookies.remove("token");
    nav("/admin");
  };

  const handleApprove = async (id) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:3300/api/Testimonials/approved/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, body: JSON.stringify({approved: true})
      });

      setRefresh((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await fetch(`http://localhost:3300/api/Testimonials/deleted/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      setRefresh((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading === true) {
    return (
      <>
        <div
          className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-surface opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar - Darker theme */}
      <aside className="w-64 bg-gray-800 text-white p-6 hidden md:flex flex-col gap-8">
        <div className="text-2xl font-bold text-blue-400 mb-6">Logo</div>

        <nav className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-700 text-blue-400"
          >
            <Folder className="w-5 h-5" />
            <span>All Testimonials</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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
            <span>Pending</span>
            <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              2
            </span>
          </a>
        </nav>

        <div className="mt-auto text-gray-400 text-sm flex flex-col gap-2">
    
          <a
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors hover:text-red-400"
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

      
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Pending Reviews
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data === null
                ? null
                : data
                    .filter((t) => t.approved === false)
                    .map((t) => (
                      <TestimonialCardAdmin
                        key={t._id}
                        testimonial={t}
                        onApprove={handleApprove}
                        onDelete={handleDelete}
                      />
                    ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Approved Testimonials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data === null
                ? " "
                : data
                    .filter((t) => t.approved === true)
                    .map((t) => (
                      <TestimonialCardAdmin
                        key={t._id}
                        testimonial={t}
                        onApprove={handleApprove}
                        onDelete={handleDelete}
                 
                      />
                    ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
