"use client";

import Link from "next/link";
import { LuCircleCheck } from "react-icons/lu";
import Image from "next/image";

const TipsBreeds = () => {
    const breeds = [
        { name: "Deshi", image: "/1.jpeg" },
        { name: "Sahiwal", image: "/sahiwal.jpeg" },
        { name: "Gir", image: "/girBull.jpeg" },
        { name: "Beetal", image: "/Beetal.jpg" },
    ];

    return (
        <section className="bg-[#062c16] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tips Section */}
                <div className="border border-green-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-sm">

                    <div className="space-y-6 w-full text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white">
                            Qurbani Tips
                        </h2>

                        <ul className="space-y-3">
                            {[
                                "Choose a healthy animal",
                                "Check age and weight",
                                "Ensure proper nutrition",
                                "Complete booking early",
                            ].map((tip, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-200">
                                    <LuCircleCheck className="text-orange-500 flex-shrink-0" size={20} />
                                    <span className="text-sm font-medium">{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-orange-500 shadow-2xl">
                            <Image
                                src="/tips.webp"
                                alt="Qurbani livestock care guide"
                                width={500}
                                height={500}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>

                {/* Breeds Section */}
                <div className="border border-green-800 rounded-3xl p-8 space-y-8 flex flex-col items-center justify-center text-center bg-white/5 backdrop-blur-sm">

                    <h2 className="text-3xl font-bold text-white">
                        Top Breeds for Qurbani
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full place-items-center">
                        {breeds.map((breed, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3">

                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-orange-500 shadow-lg">
                                    <Image
                                        src={breed.image}
                                        alt={breed.name}
                                        width={200}
                                        height={200}
                                        className="object-fill w-full h-full"
                                    />
                                </div>

                                <p className="text-white text-xs font-semibold uppercase tracking-wider">
                                    {breed.name}
                                </p>

                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <Link
                            href="/animals"
                            className="inline-block bg-white text-[#062c16] px-8 py-3 rounded-xl font-bold text-sm hover:bg-orange-900 hover:text-white transition-all shadow-md active:scale-95"
                        >
                            Explore All Breeds
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TipsBreeds;