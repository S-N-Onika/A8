"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaUserEdit, FaEnvelope, FaUserCircle } from "react-icons/fa";
import "animate.css";
import PrivateRoute from "@/components/PrivateRoute";
import { authClient } from "@/lib/auth-client";

export default function MyProfile() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <PrivateRoute>
            <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
                <Navbar />

                <div className="flex-grow flex items-center justify-center px-4 py-12">
                    <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl border border-green-100 overflow-hidden animate__animated animate__zoomIn">

                        <div className="h-32 bg-green-900 w-full relative">
                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                                <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-100 flex items-center justify-center">

                                    {user?.image ? (
                                        <Image
                                            src={user.image}
                                            alt="Profile"
                                            width={120}
                                            height={120}
                                            className="object-cover w-full h-full"
                                            unoptimized
                                        />
                                    ) : (
                                        <FaUserCircle size={100} className="text-green-900" />
                                    )}

                                </div>
                            </div>
                        </div>

                        <div className="pt-20 pb-10 px-8 text-center space-y-6">

                            <h2 className="text-3xl font-black text-green-900">
                                {user?.name || "User Name"}
                            </h2>

                            <p className="text-gray-500 flex items-center justify-center gap-2">
                                <FaEnvelope className="text-green-700" />
                                {user?.email || "No email"}
                            </p>

                            <Link
                                href="/my-profile/update"
                                className="inline-flex items-center gap-2 bg-green-900 text-white px-8 py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-orange-900 transition-all cursor-pointer"
                            >
                                <FaUserEdit size={20} />
                                Update Information
                            </Link>

                        </div>

                        <div className="bg-green-50/50 py-4 text-center border-t border-green-100">
                            <p className="text-[10px] text-green-800/50 font-black uppercase tracking-[0.2em]">
                                QurbaniHat User Profile
                            </p>
                        </div>

                    </div>
                </div>

                <Footer />
            </main>
        </PrivateRoute>
    );
}
