import React from "react";
import { useNavigate } from "react-router-dom";

const AuthRequired = () => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      {/* Main Content */}
      <div className="grid h-screen place-content-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">OOPS !!</h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sign-in / login Required
          </p>
          <p className="mt-4 text-gray-500"></p>

          <div className="mt-6 space-x-4">
            <a
              onClick={() => navigate("/login")}
              href="login.html"
              className="inline-block rounded bg-pink-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring"
            >
              Login
            </a>
            <a
              onClick={() => navigate("/SignUp")}
              href="signup.html"
              className="inline-block rounded bg-pink-600 px-5 py-3 text-sm font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring"
            >
              Sign-up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRequired;
