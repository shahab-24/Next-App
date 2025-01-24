"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";

const ClientLoginButton = () => {
  const handleLogin = () => {
    const state = uuidv4(); // Generate a unique state
    document.cookie = `state=${state}; path=/; secure; HttpOnly; SameSite=Strict`;
 // Store state in cookies

    // Build the Kinde login URL
    const loginUrl = `https://shahab24.kinde.com/oauth/authorize?response_type=code&client_id=f669c8eccc50428ba295cd938fe270b2&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/kinde_callback&state=${state}`;

    // Redirect to the login page
    window.location.href = loginUrl;
  };

  return (
    <div className="text-center mb-8">
      <button
        onClick={handleLogin}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200"
      >
        Login with Kinde
      </button>
    </div>
  );
};

export default ClientLoginButton;
