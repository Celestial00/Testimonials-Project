import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-200 text-gray-800 px-6 py-16">
      <div className="max-w-md mx-auto w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
          Login
        </h1>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        
      </div>
    </section>
  );
};

export default Login;
