import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Guest User");
    navigate("/");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="UltraStream Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-white">UltraStream</span>
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Hello, {user.name}</span>
            <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
<Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
