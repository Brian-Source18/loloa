'use client';

import { useEffect, useState } from "react";
import Header from "./components/header";

export default function Home() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <>
            <Header />

            {/* Fullscreen Hero Section with background image */}
            <section
                className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
                    fadeIn ? 'opacity-100' : 'opacity-0'
                }`}
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
                    style={{ backgroundImage: `url('/image/com.jpg')` }}
                ></div>

                {/* Overlay Content */}
                <div className="relative z-10 text-center px-4">
                    {/* 🆕 Hoverable Text Container */}
                    <div className="group inline-block p-6 rounded-xl bg-white/50 hover:bg-white/80 transition duration-300 transform hover:scale-105 cursor-pointer">
                        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg group-hover:text-blue-700 transition">
                            Effortless Payroll Processing
                        </h2>
                        <p className="text-2xl font-bold text-white-800 mt-4 drop-shadow-md group-hover:text-purple-700 transition">
                            Manage your payroll quickly, securely, and with zero hassle.
                        </p>
                    </div>


                </div>
            </section>
        </>
    );
}
