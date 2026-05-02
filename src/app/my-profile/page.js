"use client";

import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserEdit, FaEnvelope, FaUserCircle } from "react-icons/fa";
import "animate.css";
import PrivateRoute from "@/components/PrivateRoute";

export default function MyProfile() {
    const { user } = useContext(AuthContext);

    return (
        <PrivateRoute>
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl border border-green-100 overflow-hidden animate__animated animate__zoomIn">

                    <div className="h-32 bg-green-900 w-full relative">
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">

                                {user?.photoURL ? (
                                    <Image
                                        src={user.photoURL}
                                        alt="Profile"
                                        width={100}
                                        height={100}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <FaUserCircle size={100} className="text-green-900" />
                                )}

                            </div>
                        </div>
                    </div>

                    <div className="pt-20 pb-10 px-8 text-center space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-3xl font-black text-green-900 tracking-tight">
                                {user?.displayName || "User Name"}
                            </h2>
                            <p className="text-gray-500 font-medium flex items-center justify-center gap-2">
                                <FaEnvelope className="text-green-700" /> {user?.email}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto py-6">
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Username</p>
                                <p className="text-green-900 font-bold">{user?.displayName || "Guest"}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Account Status</p>
                                <p className="text-green-700 font-bold uppercase text-xs">Verified Member</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/my-profile/update"
                                className="inline-flex items-center gap-2 bg-green-900 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-orange-900 hover:-translate-y-1 transition-all active:scale-95"
                            >
                                <FaUserEdit size={20} />
                                Update Information
                            </Link>
                        </div>
                    </div>

                    <div className="bg-green-50/50 py-4 text-center border-t border-green-100">
                        <p className="text-[10px] text-green-800/50 font-black uppercase tracking-[0.2em]">
                            QurbaniHat Premium User
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
        </PrivateRoute>
    );
}