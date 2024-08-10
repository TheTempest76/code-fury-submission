"use client"; // Necessary for client-side functionality

import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";

export default function VolunteerPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    redirect("/dashboard"); // Redirect to dashboard after successful login/signup
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Dashboard />; // Render the Dashboard component if user is authenticated
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-700">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        {showLogin ? (
          <>
            <Login onSuccess={handleAuthSuccess} />
            <p className="text-gray-600 text-center">
              Don't have an account?{" "}
              <button
                onClick={() => setShowLogin(false)}
                className="text-blue-500"
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <Signup onSuccess={handleAuthSuccess} />
            <p className="text-gray-600 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setShowLogin(true)}
                className="text-blue-500"
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}