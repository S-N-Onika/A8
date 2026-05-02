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
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            const msg = "Password must be at least 6 characters";
            setError(msg);
            toast.error(msg);
            return;
        }

        try {
            toast.success("Account Created Successfully!");
            form.reset();
            router.push("/login");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        }
    };

    const handleGoogleLogin = () => {
        toast.success("Signed in with Google!");
        router.push("/");
    };

    return (
        <main className="bg-[#FCF9F3] min-h-screen flex flex-col items-center justify-center">
            <Toaster position="top-center" />

            <div className="bg-white w-full max-w-lg p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-green-100 animate__animated animate__fadeIn">

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-green-900 tracking-tight">Create Account</h2>
                    <p className="text-gray-500 font-medium mt-2">Join the QurbaniHat community today</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-2">
                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Full Name</label>
                        <input name="name" type="text" required placeholder="Your Name" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email Address</label>
                        <input name="email" type="email" required placeholder="Your Email" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Photo URL</label>
                        <input name="photo" type="text" required placeholder="Your Photo URL" className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none" />
                    </div>

                    <div className="relative">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="Your Password"
                                className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium outline-none"
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-900">
                                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-xs font-bold ml-1">{error}</p>}

                    <button type="submit" className="w-full py-4 bg-green-900 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-orange-900 hover:-translate-y-1 transition-all active:scale-95">
                        Register Now
                    </button>
                </form>

                <div className="relative my-10">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-gray-400 font-bold">Or register with</span></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center gap-3 py-4 border-2 border-gray-100 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
                >
                    <FcGoogle size={26} />
                    Sign up with Google
                </button>

                <p className="text-center mt-10 text-sm text-gray-500 font-medium">
                    Already have an account?{" "}
                    <Link href="/login" className="text-green-900 font-bold hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </main>
    );
}
