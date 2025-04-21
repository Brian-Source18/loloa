'use client';

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Header from "../components/header";

export default function LoginForm() {
    const router = useRouter();
    
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login/", formData, {
                headers: { "Content-Type": "application/json" }
            });

            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);
            console.log(response.data);

            router.push("/Home"); // Redirect to dashboard after login
        } catch (err: any) {
            setError(err.response?.data.error || "Login failed! Please check your credentials.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Header/>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4 animate-pulse">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="email" name="email" placeholder="Email" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                    <button 
                        type="submit" 
                        className={`w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition ${
                            loading ? "animate-pulse" : ""
                        }`} 
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
