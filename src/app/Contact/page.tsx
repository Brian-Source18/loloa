'use client';

import Header from "../components/header";

export default function Contact() {
    return (
        <>
            <Header />
            <div className="relative min-h-screen flex flex-col items-center justify-center sm:p-20 mt-8 font-sans bg-gray-100">
                {/* Background Overlay Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
                    style={{ backgroundImage: "url('/image/call.jpg')" }} // Make sure the path is correct
                ></div>

                {/* Content Section */}
                <section className="text-center max-w-3xl mx-auto relative z-10">
                    <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-white mt-4 drop-shadow">
                        We&apos;d love to hear from you! Reach out with any questions or inquiries.
                    </p>

                    <form className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transform transition">
                            Send Message
                        </button>
                    </form>
                </section>
            </div>
        </>
    );
}
