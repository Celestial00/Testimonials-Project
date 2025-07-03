import { Settings, User } from "lucide-react";
import TestimonialCardAdmin from "../components/TestimonialCardAdmin";

const dummyTestimonials = [
  {
    id: 1,
    title: "Incredible Support!",
    description: "I had a great experience. The team was super helpful.",
    rating: 5,
  },
  {
    id: 2,
    title: "Really Easy to Use",
    description: "The UI is clean and made sharing my testimonial simple.",
    rating: 4,
  },
];

const Dashboard = () => {
  const handleApprove = (id) => {
    console.log("✅ Approved testimonial ID:", id);
  };

  const handleDelete = (id) => {
    console.log("❌ Deleted testimonial ID:", id);
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white font-poppins">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1f1f1f] p-6 hidden md:block shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-indigo-400">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:text-indigo-400 cursor-pointer font-medium">
            Testimonials for Approval
          </li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="w-full px-6 py-4 bg-[#1f1f1f] flex justify-between items-center shadow-sm">
          <div className="text-xl font-semibold text-indigo-400">Admin Panel</div>
          <div className="flex items-center gap-4 text-gray-300">
            <Settings className="cursor-pointer hover:text-indigo-400" />
            <User className="cursor-pointer hover:text-indigo-400" />
            <button className="px-4 py-1 bg-[#2a2a2a] hover:bg-pink-500 text-white rounded-md font-semibold transition cursor-pointer">
              Sign Out
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-6 bg-[#121212] overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-indigo-300">
            Testimonials Pending Approval
          </h1>
          <div className="grid gap-6 md:grid-cols-2">
            {dummyTestimonials.map((testimonial) => (
              <TestimonialCardAdmin
                key={testimonial.id}
                testimonial={testimonial}
                onApprove={handleApprove}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
