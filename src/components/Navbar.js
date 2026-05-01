"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const user = null;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Animals", href: "/animals" },
    ];

    const activeLink = (path) =>
        pathname === path
            ? "text-green-900 font-bold border-b-2 border-green-900"
            : "text-gray-500 hover:text-green-900 transition-colors";

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
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
                        <button className="hidden sm:block text-gray-400 hover:text-green-900 transition-colors">
                            <FiSearch size={20} />
                        </button>

                        <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden sm:block"></div>

                        <div className="hidden md:flex items-center gap-3">
                            <Link href="/login" className="text-sm font-semibold text-gray-600 px-4 py-2 hover:bg-gray-50 rounded-lg transition-all">
                                Login
                            </Link>
                            <Link href="/register" className="bg-green-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-green-800 transition-all">
                                Register
                            </Link>
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
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-center font-bold text-gray-600 py-2">
                            Login
                        </Link>
                        <Link href="/register" onClick={() => setIsOpen(false)} className="text-center bg-green-900 text-white py-3 rounded-full font-bold">
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
