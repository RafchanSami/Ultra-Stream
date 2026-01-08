import React from "react";
import { auth } from "../services/firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Logout হলে Login পেজে যাবে
    } catch (err) {
      console.error("Logout error:", err);
      alert("Logout failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      {user ? (
        <div className="bg-gray-900 p-6 rounded-lg w-96 space-y-3">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>UID:</strong> {user.uid}</p>
          <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="bg-red-600 px-4 py-2 rounded mt-6 w-40"
      >
        Logout
      </button>

      {/* 👉 Break / Cancel button */}
      <button
        type="button"
        onClick={() => navigate("/")}
        className="bg-gray-600 px-4 py-2 rounded mt-2 w-40"
      >
        Break / Cancel
      </button>
    </div>
  );
};

export default Profile;
