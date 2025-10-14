import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUserPlus, FiCheck } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthRegistrationForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col">
      <Header />

      <main className="w-full py-8 px-4 flex-grow">
        <div className="max-w-6xl mx-auto w-full">
          {/* TOP NAVIGATION BLOCK */}
          <div className="space-y-4 mb-10">
            <div className="text-sm text-purple-200">
              Home/Authentication/RegistrationPortal
            </div>

            <button
              onClick={() => navigate("/auth")}
              className="flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              <span className="text-lg">←</span>
              <span>Authentication</span>
            </button>
          </div>

          {/* FORM CONTAINER */}
          <div className="flex justify-center w-full">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl max-w-md w-full">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUserPlus className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-900 mb-2">
                    REGISTRATION
                  </h3>
                  <p className="text-purple-700 font-medium">
                    Campus Learn
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl" />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="w-full p-4 pl-12 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-500 text-gray-700 font-medium"
                    />
                  </div>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl" />
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="w-full p-4 pl-12 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-500 text-gray-700 font-medium"
                    />
                  </div>
                  <div className="relative">
                    <FiCheck className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 text-xl" />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full p-4 pl-12 rounded-xl border-2 border-purple-200 focus:outline-none focus:border-purple-500 text-gray-700 font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthRegistrationForm;
