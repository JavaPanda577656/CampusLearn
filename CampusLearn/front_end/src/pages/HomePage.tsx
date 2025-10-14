import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Refactored NavCardProps to handle the different content types for Auth and About cards
interface NavCardProps {
  title: string;
  subtitle?: string;
  path: string;
  navigate: ReturnType<typeof useNavigate>;

  // Specific background color or gradient for the card container
  cardBgColor: string;

  leftImageSrc?: string; // Used for the graphic on the left (ABOUT)
  leftImageAlt?: string;

  rightImageSrc: string; // Used for the graphic on the right (AUTH and ABOUT)
  rightImageAlt: string;

  layoutType: "AUTH" | "ABOUT";
}

const NavCard: React.FC<NavCardProps> = ({
  title,
  subtitle,
  path,
  navigate,
  cardBgColor,
  leftImageSrc,
  leftImageAlt,
  rightImageSrc,
  rightImageAlt,
  layoutType,
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
      <div
        onClick={() => navigate(path)}
        className="cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
      >
        <div className="flex items-center justify-between h-full">
          {/* Text Content */}
          <div className="flex flex-col flex-grow">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-2">
              {title}
            </h2>
            <p className="text-lg text-purple-700 font-medium">
              {subtitle}
            </p>
          </div>

          {/* Image */}
          <div className="w-24 h-24 flex items-center justify-center flex-shrink-0 ml-6">
            <img
              src={rightImageSrc}
              alt={rightImageAlt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <Header />

      <main className="max-w-4xl mx-auto py-10 px-4 space-y-8">
        {/* 1. AUTHENTICATION CARD */}
        <NavCard
          title="AUTHENTICATION PAGE"
          subtitle="SECURE LOGIN PROTECTED ACCESS"
          path="/auth"
          navigate={navigate}
          cardBgColor="#ffffff" // White background for the card
          layoutType="AUTH"
          rightImageSrc="/images/AuthCard.PNG"
          rightImageAlt="Secure Login Authentication Graphic"
        />

        {/* 2. ABOUT US & CONTACT US CARD */}
        <NavCard
          title="About Us & Contact Us"
          subtitle="Tutor-Student Relations Management System"
          path="/about"
          navigate={navigate}
          cardBgColor="#ffffff" // White background for the card
          layoutType="ABOUT"
          leftImageSrc="/images/AboutCard.PNG"
          leftImageAlt="Learning Graphic"
          rightImageSrc="/images/AboutCard2.PNG"
          rightImageAlt="Security Graphic"
        />

        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
