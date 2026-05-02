"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    const navigationLinks = [
        { name: "Home", href: "/" },
        { name: "Featured Animals", href: "/#featured" },
        { name: "Qurbani Tips", href: "/#Tips-Breeds" },
        { name: "Top Breeds", href: "/#Tips-Breeds" }
    ];

    const socialLinks = [
        { Icon: FaFacebookF, href: "https://facebook.com" },
        { Icon: FaTwitter, href: "https://twitter.com" },
        { Icon: FaInstagram, href: "https://instagram.com" },
        { Icon: FaLinkedinIn, href: "https://linkedin.com" }
    ];

    return (
        <footer className="bg-green-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-6 text-center md:text-left">
                        <Link href="/" className="flex items-center justify-center md:justify-start gap-2">

                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={40}
                                height={40}
                                className="object-contain bg-white rounded-lg"
                            />
                            <span className="text-2xl font-bold text-white">QurbaniHat</span>
                        </Link>
                        <h4 className="text-white font-bold mb-4">About Us</h4>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            The most trusted marketplace for healthy and verified Qurbani livestock. Connecting local farms with families across Bangladesh.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            {socialLinks.map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-green-900 text-gray-200 hover:bg-orange-900 hover:text-white transition-all border border-green-800"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-6">Customer Care</h4>
                        <ul className="space-y-4">
                            {["How to Book", "Payment Methods", "Refund Policy", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 text-sm hover:text-orange-400 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-3 text-gray-300 text-sm">
                                <HiOutlineLocationMarker className="text-orange-500 shrink-0" size={20} />
                                <span>Level 4, Farmgate, Dhaka 1215, Bangladesh</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-gray-300 text-sm">
                                <HiOutlinePhone className="text-orange-500 shrink-0" size={18} />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-gray-300 text-sm">
                                <HiOutlineMail className="text-orange-500 shrink-0" size={18} />
                                <span>support@qurbanihat.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-gray-400 text-xs font-medium">
                        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <a href="#" className="text-gray-400 text-xs hover:text-orange-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 text-xs hover:text-orange-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
