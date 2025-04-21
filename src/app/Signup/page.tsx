'use client';

import { useState } from "react";
import axios from "axios";
import Header from "../components/header";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        username: "",
        contact: "",
        address: "",
        position: "", // 🆕 position added here
        gender: "Male",
        email: "",
        password: "",
        confirm_password: ""
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = 
            await axios.post("http://127.0.0.1:8000/api/register/", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            setSuccess(response.data.message || "User registered successfully!");

            setSuccess("User registered successfully!");
            setFormData({
                first_name: "",
                middle_name: "",
                last_name: "",
                username: "",
                contact: "",
                address: "",
                position: "", // reset position
                gender: "Male",
                email: "",
                password: "",
                confirm_password: ""
            });
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                if (err.response?.data) {
                    const errorMessages = Object.values(err.response.data).flat().join(" ");
                    setError(errorMessages);
                } else {
                    setError("Something went wrong. Please try again later.");
                }
            } else {
                setError("An unexpected error occurred.");
            }
        }
        
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center mt-20 justify-center bg-gray-100 p-6">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
                    <h2 className="text-2xl font-bold text-center mb-4 animate-bounce">Sign Up</h2>

                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="first_name" value={formData.first_name} placeholder="First Name" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                            <input type="text" name="middle_name" value={formData.middle_name} placeholder="Middle Name (Optional)" className="p-3 border rounded-lg w-full" onChange={handleChange} />
                            <input type="text" name="last_name" value={formData.last_name} placeholder="Last Name" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                            <input type="text" name="username" value={formData.username} placeholder="Username" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        </div>
                        <input type="email" name="email" value={formData.email} placeholder="Email" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        <input type="text" name="contact" value={formData.contact} placeholder="Contact Number" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        <input type="text" name="address" value={formData.address} placeholder="Address" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        
                        {/* 🆕 Position field */}
                        <input type="text" name="position" value={formData.position} placeholder="Position (e.g. Admin, Staff)" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        
                        <select name="gender" value={formData.gender} className="p-3 border rounded-lg w-full" required onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="password" name="password" value={formData.password} placeholder="Password" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        <input type="password" name="confirm_password" value={formData.confirm_password} placeholder="Confirm Password" className="p-3 border rounded-lg w-full" required onChange={handleChange} />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition animate-bounce"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
