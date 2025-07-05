// Dashboard.jsx
import { Settings, User, LogOut, Folder, Search } from "lucide-react";
import TestimonialCardAdmin from "../components/TestimonialCardAdmin";

const dummyTestimonials = [
  {
    id: 1,
    university: "Oxford University",
    country: "UK",
    specialization: "AI Research",
    projectStart: "2023-01-15",
    researchMethod: "Quantitative",
    rating: 5,
    status: "pending"
  },
  {
    id: 2,
    university: "MIT",
    country: "USA",
    specialization: "Data Science",
    projectStart: "2022-09-01",
    researchMethod: "Statistical",
    rating: 4,
    status: "pending"
  },
  {
    id: 3,
    university: "ETH Zurich",
    country: "Switzerland",
    specialization: "Machine Learning",
    projectStart: "2023-03-10",
    researchMethod: "Qualitative",
    rating: 5,
    status: "approved"
  },
];

export default function Dashboard() {
  const handleApprove = (id) => console.log("✅ Approved:", id);
  const handleDelete = (id) => console.log("❌ Deleted:", id);
  const handleView = (id) => console.log("👁 Viewed:", id);

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {/* Sidebar - Darker theme */}
      <aside className="w-64 bg-gray-800 text-white p-6 hidden md:flex flex-col gap-8">
        <div className="text-2xl font-bold text-blue-400 mb-6">minecloud</div>
        
        <nav className="flex flex-col gap-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-700 text-blue-400">
            <Folder className="w-5 h-5" />
            <span>All Testimonials</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Approved</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Pending</span>
            <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">2</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <span>Deleted</span>
          </a>
        </nav>

        <div className="mt-auto text-gray-400 text-sm flex flex-col gap-2">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors hover:text-red-400">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Light gray background */}
        <header className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search testimonials..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 bg-white"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Main Section - Slightly darker background */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Pending Testimonials</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Filter
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Sort
                </button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyTestimonials
                .filter(t => t.status === "pending")
                .map((t) => (
                  <TestimonialCardAdmin
                    key={t.id}
                    testimonial={t}
                    onApprove={handleApprove}
                    onDelete={handleDelete}
                    onView={handleView}
                  />
                ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Approved Testimonials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyTestimonials
                .filter(t => t.status === "approved")
                .map((t) => (
                  <TestimonialCardAdmin
                    key={t.id}
                    testimonial={t}
                    onApprove={handleApprove}
                    onDelete={handleDelete}
                    onView={handleView}
                  />
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}