import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-3xl shadow-2xl mt-8">
      <div className="bg-white rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300">
              <span className="font-bold text-sm">X</span>
            </a>
            <a href="#" className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300">
              <span>📸</span>
            </a>
            <a href="#" className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300">
              <span>▶️</span>
            </a>
            <a href="#" className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 hover:bg-purple-200 transition-all duration-300">
              <span>💼</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="text-center sm:text-right text-sm text-gray-600 space-y-1">
            <p><strong className="text-purple-700">Email:</strong> campuslearn@belgiumcampus.ac.za</p>
            <p><strong className="text-purple-700">Phone:</strong> 010 593 5368</p>
            <p><strong className="text-purple-700">Address:</strong> 138 Berg Ave, Heatherdale AH, Akasia, 0182</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
