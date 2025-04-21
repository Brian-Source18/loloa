'use client';

import { useEffect, useState } from "react";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("access_token");
        const refresh = localStorage.getItem("refresh_token");
        setIsLoggedIn(!!user || !!refresh);
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            setIsLoggedIn(false);
        }
    };

    return (
        <header className="w-full fixed top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg z-50">
            <div className="max-w-5xl mx-auto flex justify-between items-center p-6">
                <h1 className="text-2xl font-extrabold">Payroll System</h1>
                <nav className="flex items-center space-x-6 text-lg">
                    <a href="/Home" className="hover:underline">Home</a>
                    <a href="/Aboutus" className="hover:underline">About Us</a>
                    <a href="/Contact" className="hover:underline">Contact</a>

                    {/* Account Actions Group */}
                    {isLoggedIn ? (
                        <div className="flex items-center space-x-4 pl-4 border-l border-white">
                            <a href="/Salary" className="hover:underline">Salary</a>
                            <a href="/profile" className="hover:underline">Profile</a>
                            <button onClick={handleLogout} className="hover:underline">Logout</button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4 pl-4 border-l border-white">
                            <a href="/Signup" className="hover:underline">Sign Up</a>
                            <a href="/Login" className="hover:underline">Log In</a>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}
