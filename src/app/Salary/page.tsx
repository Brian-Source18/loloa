'use client';

import { useEffect, useState } from 'react';
import Header from '../components/header'; // adjust path as needed

export default function SalaryPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <Header />
      <div
        className={`min-h-screen relative bg-gray-100 p-6 sm:p-12 transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
          style={{ backgroundImage: "url('/image/coins.jpg')" }} // Replace with your image path
        ></div>

        <div
          className={`max-w-4xl mx-auto bg-white mt-20 shadow-2xl rounded-2xl p-8 z-10 relative transition duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} hover:scale-105 transform`}
        >
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Salary Overview</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Employee Info */}
            <div
              className={`bg-blue-50 rounded-xl p-6 shadow-inner transform transition duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} hover:scale-105`}
            >
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Employee Info</h2>
              <p><span className="font-semibold">Name:</span> Juan Dela Cruz</p>
              <p><span className="font-semibold">Position:</span> Software Developer</p>
              <p><span className="font-semibold">Department:</span> IT</p>
            </div>

            {/* Salary Breakdown */}
            <div
              className={`bg-purple-50 rounded-xl p-6 shadow-inner transform transition duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'} hover:scale-105`}
            >
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">Salary Breakdown</h2>
              <p><span className="font-semibold">Basic Pay:</span> ₱30,000.00</p>
              <p><span className="font-semibold">Deductions:</span> ₱5,000.00</p>
              <p className="text-lg font-bold mt-4 text-green-600">
                <span className="font-semibold">Net Pay:</span> ₱25,000.00
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-10 text-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition">
              Download Payslip
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
