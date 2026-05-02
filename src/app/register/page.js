"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import "animate.css";

export default function RegisterPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const photo = form.photo.value.trim();
        const password = form.password.value;

        if (!name || !email || !photo || !password) {
            const msg = "All fields are required";
            setError(msg);
            toast.error(msg);
            return;
        }

        if (password.length < 6) {
            const msg = "Password must be at least 6 characters";
            setError(msg);
            toast.error(msg);
            return;
        }

        setLoading(true);

        try {
            await new Promise((res) => setTimeout(res, 800));

            toast.success("Account Created Successfully!");
            form.reset();
            router.push("/login");
        } catch (err) {
            const msg = err?.message || "Registration failed";
            setError(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            toast.success("Signed in with Google!");
            router.push("/");
        } catch {
            toast.error("Google Sign-in failed");
        }
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex items-center justify-center px-4">
            <Toaster position="top-center" />

            <div className="bg-white w-full max-w-lg p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-green-100 animate__animated animate__fadeIn">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-green-900">
                        Create Account
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Join the QurbaniHat community today
                    </p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">

                    <input name="name" type="text" placeholder="Full Name"
                        className="input" />

                    <input name="email" type="email" placeholder="Email"
                        className="input" />

                    <input name="photo" type="text" placeholder="Photo URL"
                        className="input" />

                    <div className="relative">
                        <input
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input pr-12"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-bold">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-orange-900 transition disabled:opacity-50"
                    >
                        {loading ? "Creating..." : "Register Now"}
                    </button>
                </form>

                <div className="my-8 flex items-center gap-2">
                    <div className="flex-1 border-t" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="flex-1 border-t" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 py-4 border rounded-2xl font-bold hover:bg-gray-50"
                >
                    <FcGoogle size={24} />
                    Sign up with Google
                </button>

                <p className="text-center mt-8 text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-green-900 font-bold">
                        Login
                    </Link>
                </p>

            </div>

            <style jsx>{`
                .input {
                    width: 100%;
                    padding: 14px 20px;
                    background: #f9fafb;
                    border-radius: 14px;
                    outline: none;
                    font-weight: 500;
                    border: 1px solid transparent;
                    transition: 0.2s;
                }
                .input:focus {
                    border-color: #14532d;
                    background: white;
                }
            `}</style>
        </main>
    );
}