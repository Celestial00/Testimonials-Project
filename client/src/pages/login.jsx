import React, { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const handle = form.email;
    const password = form.password;

    const res = await fetch("http://localhost:3300/api/auth/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handle,
        password,
      }),
    });

    if (res.status === 200) {
      alert("nice");
      let Data = await res.json();

      Cookies.set('token', Data.token, {expires:'1'} )

    }

    if (res.status === 401) {
      alert("User Not Found!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] font-poppins px-4">
      <div className="w-full max-w-md bg-[#1f1f1f] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Don't have an account?{" "}
          <span className="text-indigo-400 cursor-pointer hover:underline">
            Contact Admin
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
