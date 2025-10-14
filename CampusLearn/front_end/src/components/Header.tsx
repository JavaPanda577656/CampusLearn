import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and App Name */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-purple-600 font-bold text-lg">CL</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Campus Learn</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-white text-white rounded-lg text-sm font-medium bg-transparent hover:bg-white hover:text-purple-600 transition duration-300">
            Student Portal
          </button>
          <button className="px-4 py-2 bg-purple-800 text-white rounded-lg text-sm font-medium hover:bg-purple-900 transition duration-300">
            BG Connect
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
