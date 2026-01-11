import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 👉 Firebase auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed: " + err.message);
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900">
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <img
          src="../src/assets/logo.png"   // 👉 public/logo.png এ logo রাখো
          alt="UltraStream Logo"
          className="w-10 h-10 object-contain"
        />
        <h1 className="text-xl font-bold text-white">Ultra Stream</h1>
      </div>

      {/* Right side buttons */}
      <div className="space-x-4">
        {!user ? (
          <>
            {/* 👉 Login form পেজে যাবে */}
            <Link to="/login" className="bg-blue-600 px-4 py-2 rounded">
              Login
            </Link>
            {/* 👉 SignUp form পেজে যাবে */}
            <Link to="/signup" className="bg-green-600 px-4 py-2 rounded">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="bg-purple-600 px-4 py-2 rounded">
              Profile ({user.email})
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
