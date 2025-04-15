import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Left panel (Welcome section) */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#1A1A2E] text-white p-10">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Welcome to <span className="text-indigo-400">Ecommerce</span>
          </h1>
          <p className="text-lg text-gray-300">
            Your gateway to seamless shopping. Sign in to continue.
          </p>
        </div>
      </div>

      {/* Right panel (Form area) */}
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-10">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
