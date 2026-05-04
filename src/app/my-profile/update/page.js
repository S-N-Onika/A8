"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserCircle, FaLink } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

export default function UpdateInformation() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const image = e.target.photo.value.trim();

        if (!name || !image) {
            return toast.error("All fields are required");
        }

        setLoading(true);

        try {
            await authClient.updateUser({
                name,
                image,
            });

            toast.success("Profile updated successfully!");
            router.push("/my-profile");
        } catch (error) {
            toast.error("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
            <Navbar />
            <Toaster />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-green-100">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-green-900">
                            Update Profile
                        </h2>
                        <p className="text-gray-500 text-sm font-medium mt-2">
                            Change your public identity
                        </p>
                    </div>

                    <form onSubmit={handleUpdate} className="space-y-6">

                        <div>
                            <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                                <FaUserCircle className="text-green-700" /> New Name
                            </label>

                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none"
                            />
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase mb-2 ml-1">
                                <FaLink className="text-green-700" /> Photo URL
                            </label>

                            <input
                                name="photo"
                                type="text"
                                required
                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 bg-green-900 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-orange-900 transition-all active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Updating..." : "Update Information"}
                        </button>

                    </form>

                    <button
                        onClick={() => router.back()}
                        className="w-full mt-4 text-sm font-bold text-gray-400 hover:text-green-900 transition-colors"
                    >
                        Cancel and Go Back
                    </button>

                </div>
            </div>

            <Footer />
        </main>
    );
}