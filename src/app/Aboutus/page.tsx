'use client';

import { useEffect, useState } from "react";
import Header from "../components/header";

export default function AboutUs() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <>
            <Header />

            {/* Full screen wrapper with background image */}
            <div className="relative min-h-screen flex flex-col items-center justify-center font-sans">
                {/* Background image overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
                    style={{ backgroundImage: "url('/image/hol.jpg')" }}
                ></div>

                {/* Foreground content */}
                <div className="relative z-10 p-8 sm:p-20 w-full">
                    <section
                        className={`text-center mt-32 max-w-4xl mx-auto transform transition-all duration-1000 ${
                            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        {/* 🆕 Hoverable Container */}
                        <div className="group p-10 rounded-2xl bg-white/60 hover:bg-white/80 transition duration-300 cursor-pointer hover:scale-105 shadow-lg">
                            <h2 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg group-hover:text-blue-700 transition">
                                About Our Payroll System
                            </h2>
                            <p className="text-xl text-gray-800 mt-6 drop-shadow-md group-hover:text-gray-900 transition">
                                Our payroll system is designed to streamline payroll processing, making it efficient and secure for businesses of all sizes.
                                We provide automated calculations, real-time reporting, and compliance with the latest financial regulations.
                            </p>
                            <p className="text-xl text-gray-800 mt-4 drop-shadow-md group-hover:text-gray-900 transition">
                                With a focus on accuracy and reliability, our system ensures timely payments, proper deductions, and a seamless experience 
                                for both employers and employees.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
