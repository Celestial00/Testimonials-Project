import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const nav = useNavigate();

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      nav("/dashboard");
    }
  }, []);

  const HandleLogin = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch("http://localhost:3300/api/auth/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const results = await res.json();

      if (results.res === "401") {
        alert(`Message: ` + results.msg);
      } else {
        Cookies.set("token", results.token);
        nav("/dashboard");
      }
    } catch (error) {
      console.error("Admin login error:", error); // Add this line
      res
        .status(500)
        .json({ error: "Internal Server Error", message: error.message });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
              name="email"
              onChange={handleChange}
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
              name="password"
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            onClick={HandleLogin}
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
