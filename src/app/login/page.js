"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import "animate.css";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;
        setLoading(true);

        await authClient.signIn.email(
            {
                email: email.trim().toLowerCase(),
                password,
                callbackURL: "/",
            },
            {
                onSuccess: () => {
                    toast.success("Welcome back!");
                    setLoading(false);
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Login failed");
                    setLoading(false);
                },
            }
        );
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        await authClient.signIn.social(
            {
                provider: "google",
                callbackURL: "/",
            },
            {
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Google Sign-In failed.");
                    setLoading(false);
                },
                onSuccess: () => setLoading(false),
            }
        );
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
            <Toaster position="top-center" />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-xl border border-green-100 animate__animated animate__fadeIn">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-green-900">Login</h2>
                        <p className="text-gray-500 text-sm mt-2">Access your QurbaniHat account</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                                })}
                                type="email"
                                className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border outline-none transition-all focus:bg-white ${errors.email ? "border-red-500" : "focus:border-green-900"
                                    }`}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">Password</label>
                            <input
                                {...register("password", { required: "Password is required"
                                    , minLength: { value: 8, message: "Password must be at least 8 characters" },
                                 })}
                                type={showPassword ? "text" : "password"}
                                className={`w-full px-5 py-3.5 bg-gray-50 rounded-xl border outline-none transition-all focus:bg-white ${errors.password ? "border-red-500" : "focus:border-green-900"
                                    }`}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-10 text-gray-400 hover:text-green-900"
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-orange-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="my-8 flex items-center">
                        <div className="flex-1 border-t border-gray-100" />
                        <span className="px-2 text-xs text-gray-400">OR</span>
                        <div className="flex-1 border-t border-gray-100" />
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-colors disabled:opacity-50"
                    >
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-green-900 font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
