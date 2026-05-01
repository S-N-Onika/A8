"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            if (email && password) {
                toast.success("Login Successful!");
                router.push("/");
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (err) {
            setError(err.message);
            toast.error(err.message || "Failed to login. Please try again.");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            toast.success("Signed in with Google!");
            router.push("/");
        } catch (err) {
            toast.error("Google Sign-In failed.");
        }
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
            <Toaster position="top-center" reverseOrder={false} />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-xl border border-green-100">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-green-900">Login</h2>
                        <p className="text-gray-500 text-sm font-medium mt-2">Access your QurbaniHat account</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="Enter your password"
                                    className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-900 transition-colors"
                                >
                                    {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="text-red-500 text-xs font-bold ml-1">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-green-900 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-orange-900 hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Login
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-bold">Or</span></div>
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 py-3.5 border-2 border-gray-100 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
                    >
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    <p className="text-center mt-8 text-sm text-gray-500 font-medium">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-green-900 font-bold hover:underline">
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
