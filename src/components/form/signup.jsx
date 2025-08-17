import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage(res.data.message || "Signup successful");
      setIsError(false);
      setFormData({ name: "", email: "", password: "" });
      // store user info
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: res.data.user.name,
          email: res.data.user.email,
        })
      );

      // Redirect to login page
      navigate("/login");
    } catch (err) {
      console.error(" Signup Error:", err.response?.data || err.message);
      setMessage(
        err.response?.data?.message || "Signup failed. Please try again."
      );
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[90vh] m-auto max-w-[1200px]">
      <div className="max-w-[500px] w-full mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="my-4 text-2xl font-bold text-center">Sign Up</h1>

        {message && (
          <p
            className={`mb-4 text-center font-medium ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Name</label>
            <div className="flex items-center border-2 border-gray-300 rounded-md px-2">
              <FaUser className="text-gray-500 mr-2 text-lg" />
              <input
                type="text"
                placeholder="Full Name"
                className="py-2 flex-1 outline-none"
                value={formData.name}
                onChange={handleChange}
                name="name"
                autoComplete="name"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Email</label>
            <div className="flex items-center border-2 border-gray-300 rounded-md px-2">
              <MdOutlineMail className="text-gray-500 mr-2 text-lg" />
              <input
                type="email"
                placeholder="Email"
                className="py-2 flex-1 outline-none"
                value={formData.email}
                onChange={handleChange}
                name="email"
                autoComplete="username"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-medium">Password</label>
            <div className="flex items-center border-2 border-gray-300 rounded-md px-2">
              <IoLockClosedOutline className="text-gray-500 mr-2 text-lg" />
              <input
                type="password"
                placeholder="Password"
                className="py-2 flex-1 outline-none"
                value={formData.password}
                onChange={handleChange}
                name="password"
                autoComplete="new-password"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-md my-2 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
