"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/providers/AuthProvider";

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const auth = useContext(AuthContext);

    const login = auth?.login;

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            if (!email || !password) {
                throw new Error("Invalid credentials");
            }

            if (password.length < 6) {
                const msg = "Password must be at least 6 characters";
                setError(msg);
                toast.error(msg);
                return;
            }

            const fakeUser = {
                name: "User",
                email,
                photoURL: ""
            };

            if (login) {
                await login(fakeUser);
            }

            toast.success("Login Successful!");
            router.push("/");

        } catch (err) {
            const msg = err?.message || "Failed to login. Please try again.";
            setError(msg);
            toast.error(msg);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            toast.success("Signed in with Google!");
            router.push("/");
        } catch {
            toast.error("Google Sign-In failed.");
        }
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col">
            <Toaster position="top-center" />

            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="bg-white w-full max-w-md p-8 md:p-10 rounded-3xl shadow-xl border border-green-100">

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-green-900">Login</h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Access your QurbaniHat account
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">

                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                                Email
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border focus:bg-white focus:border-green-900 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="relative">
                            <label className="text-xs font-bold text-gray-400 uppercase ml-1">
                                Password
                            </label>

                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border focus:bg-white focus:border-green-900 outline-none"
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-9 text-gray-400 hover:text-green-900"
                            >
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-xs font-bold">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-orange-900 transition"
                        >
                            Login
                        </button>
                    </form>

                    <div className="my-8 flex items-center">
                        <div className="flex-1 border-t" />
                        <span className="px-2 text-xs text-gray-400">OR</span>
                        <div className="flex-1 border-t" />
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 py-3.5 border rounded-2xl font-bold hover:bg-gray-50"
                    >
                        <FcGoogle size={24} />
                        Continue with Google
                    </button>

                    <p className="text-center mt-8 text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-green-900 font-bold">
                            Register
                        </Link>
                    </p>

                </div>
            </div>
        </main>
    );
}