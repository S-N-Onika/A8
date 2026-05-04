"use client";

import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import "animate.css";

const NotFound = () => {
    const baseStyle =
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all";
    const activeStyle = "bg-[#244d3f] text-white";
    const inactiveStyle =
        "text-[#244d3f] border border-[#244d3f] hover:bg-[#244d3f] hover:text-white";

    const isActive = false;

    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col place-content-center items-center justify-center gap-4">
            <h1 className="text-6xl font-bold text-center text-[#244d3f] capitalize">
                404
            </h1>

            <h3 className="text-2xl font-semibold text-gray-700">
                Page Not Found
            </h3>

            <p className="text-gray-500 text-lg">
                The page you are looking for does not exist.
            </p>

            <Link
                href="/"
                className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle
                    }`}
                style={{ marginBottom: 10 }}
            >
                <BiHomeAlt2 className="text-lg" />
                <span className="font-semibold">Back To Home</span>
            </Link>
        </div>
    );
};

export default NotFound;