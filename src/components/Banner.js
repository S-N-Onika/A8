"use client";

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const Banner = () => {
    return (
        <section className="relative w-full min-h-100 md:min-h-160 flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="/banner.png"
                    alt="Qurbani Livestock Background"
                    className="w-full h-full object-cover object-center md:object-[80%_25%] opacity-50"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-center md:text-left space-y-6">
                    <h1 className="text-3xl md:text-7xl font-extrabold text-orange-900 leading-tight">
                        Find Perfect Sacrifices<br />For
                        <span className="text-green-900"> Qurbani</span>
                    </h1>

                    <p className="text-gray-700 text-md md:text-xl font-medium">
                        Explore the finest collection of healthy cows and goats from top <br />local farms.Book your sacrifice animal today with trust and ease.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                        <Link
                            href="/animals"
                            className="group flex items-center justify-center gap-2 bg-green-900 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-green-800 hover:-translate-y-1 transition-all"
                        >
                            Browse All Animals
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
