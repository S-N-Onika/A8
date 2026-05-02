"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { FiMenu, FiX, FiLogOut, FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        setShowDropdown(false);
        setIsOpen(false);
        logout();
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Animals", href: "/animals" },
    ];

    const activeLink = (path) =>
        pathname === path
            ? "text-green-900 font-bold border-b-2 border-green-900 pb-1"
            : "text-gray-500 hover:text-green-900 transition-colors pb-1";

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-1">
                            <Image src="/logo.png" alt="Logo" width={60} height={60} className="object-contain" />
                            <span className="text-3xl font-bold text-green-900">QurbaniHat</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex space-x-10 text-md font-medium">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={activeLink(link.href)}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">

                        <div className="hidden md:flex items-center relative">
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <button
                                            onClick={() => setShowDropdown(!showDropdown)}
                                            className="focus:outline-none flex items-center transition-transform active:scale-95"
                                        >
                                            {user.photoURL ? (
                                                <div className="w-10 h-10 rounded-full border-2 border-green-900 overflow-hidden">
                                                    <Image
                                                        src={user.photoURL}
                                                        alt="User"
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <FaUserCircle size={38} className="text-green-900 hover:text-green-700" />
                                            )}
                                        </button>

                                        {showDropdown && (
                                            <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in zoom-in duration-200 origin-top-right">
                                                <Link
                                                    href="/my-profile"
                                                    onClick={() => setShowDropdown(false)}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-green-50 transition-colors"
                                                >
                                                    <FiUser /> Profile
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={handleLogout}
                                        className="bg-green-900 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-green-800 transition-all flex items-center gap-2"
                                    >
                                        <FiLogOut /> Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center gap-3">
                                    <Link href="/login" className="text-sm font-semibold text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg">
                                        Login
                                    </Link>
                                    <Link href="/register" className="bg-green-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-green-800">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-green-900">
                            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg ${activeLink(link.href)}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                        {user ? (
                            <>
                                <Link href="/my-profile" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 font-bold text-gray-700 py-2">
                                    <FaUserCircle size={24} /> My Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="bg-green-900 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-green-800 transition-all flex items-center gap-2 justify-center"
                                >
                                    <FiLogOut /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center font-bold text-gray-700 py-2">Login</Link>
                                <Link href="/register" onClick={() => setIsOpen(false)} className="text-center bg-green-900 text-white py-3 rounded-full font-bold">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
