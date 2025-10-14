import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogIn, FiUserPlus, FiLock } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Reusable card for Auth options (Login, Register, Forgot)
interface AuthCardProps {
  title: string;
  subtitle: string;
  imageSrc: string; // Path to the image asset
  imageAlt: string;
  onClick: () => void; // <-- The function that handles the navigation
}

const AuthCard: React.FC<AuthCardProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  onClick,
}) => (
  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        {/* Left Content (Text) */}
        <div className="flex flex-col flex-grow">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-2">
            {title}
          </h2>
          <p className="text-lg text-purple-700 font-medium">
            {subtitle}
          </p>
        </div>

        {/* Right Icon Area */}
        <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 ml-6">
          {title === "LOGIN" && <FiLogIn className="text-purple-600 text-3xl" />}
          {title === "REGISTRATION" && <FiUserPlus className="text-purple-600 text-3xl" />}
          {title === "FORGOT PASSWORD" && <FiLock className="text-purple-600 text-3xl" />}
        </div>
      </div>
    </div>
  </div>
);

const AuthPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/auth/login");
  const handleRegisterClick = () => navigate("/auth/register");
  const handleForgotClick = () => navigate("/auth/forgot-password");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Header />

      <main className="max-w-4xl mx-auto py-8 px-4 space-y-8">
        {/* Back Button */}
        <div className="flex justify-start">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            <span className="text-lg">←</span>
            <span>Home</span>
          </button>
        </div>

        {/* Login Card */}
        <AuthCard
          title="LOGIN"
          subtitle="Campus Learn with Copilot"
          onClick={handleLoginClick}
          imageSrc="/images/login-graphic.png"
          imageAlt="Login Icon"
        />

        {/* Registration Card */}
        <AuthCard
          title="REGISTRATION"
          subtitle="Campus Learn with Copilot"
          onClick={handleRegisterClick}
          imageSrc="/images/registration-graphic.png"
          imageAlt="Registration Icon"
        />

        {/* Forgot Password Card */}
        <AuthCard
          title="FORGOT PASSWORD"
          subtitle="Campus Learn"
          onClick={handleForgotClick}
          imageSrc="/images/forgot-password-graphic.png"
          imageAlt="Forgot Password Icon"
        />

        <Footer />
      </main>
    </div>
  );
};

export default AuthPage;
