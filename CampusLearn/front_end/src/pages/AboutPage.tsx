import React from "react";
import { useNavigate } from "react-router-dom";
import { FiInfo, FiTarget, FiMail, FiPhone, FiMapPin, FiCpu } from "react-icons/fi";
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

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

        {/* About Us & Contact Us Header Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center justify-between">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiInfo className="text-purple-600 text-3xl" />
              </div>
              <div className="flex flex-col text-purple-900 text-right">
                <h2 className="text-4xl font-bold tracking-tight">
                  About Us & Contact Us
                </h2>
                <p className="text-purple-700 font-medium mt-2">Campus Learn Platform</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* About Campus Learn Card */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiInfo className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    About Campus Learn
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Campus Learn is a modern, AI-enhanced Tutor-Student Relations
                    Management System (TSRMS) dedicated to optimizing the academic
                    journey. We bridge the gap between students and tutors, making
                    personalized, effective learning support accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to foster academic success by providing a seamless,
                    intelligent platform that supports collaboration and personalized
                    learning. We believe that technology should empower both educators
                    and students to achieve their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Microsoft Copilot Card */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-purple-900">
                    MICROSOFT COPILOT
                  </h4>
                  <p className="text-purple-700 font-semibold">
                    Your Everyday AI Assistant.
                  </p>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <FiCpu className="text-purple-600 text-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">
                CONTACT US
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FiMail className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">campuslearn@belgiumcampus.ac.za</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FiPhone className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">010 593 5368</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-purple-600" />
                  </div>
                  <span className="text-gray-700 font-medium">138 Berg Ave, Heatherdale AH, Akasia, 0182</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                  <FaTwitter className="text-blue-500 text-xl" />
                </div>
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center hover:bg-pink-200 transition-colors cursor-pointer">
                  <FaInstagram className="text-pink-500 text-xl" />
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center hover:bg-red-200 transition-colors cursor-pointer">
                  <FaYoutube className="text-red-500 text-xl" />
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                  <FaLinkedin className="text-blue-600 text-xl" />
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <p className="font-medium">Connect with us on social media</p>
                <p className="text-purple-700">@CampusLearn</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default AboutPage;
