"use client";

import { FaStar, FaUserCircle } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";

const RatingSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Rahat Kabir",
            role: "Cattle Buyer",
            review:
                "Found a healthy Shahiwal bull for my family. The process was very smooth and transparent.",
            rating: 5,
        },
        {
            id: 2,
            name: "Sumi Akter",
            role: "Regular Customer",
            review:
                "Best platform for Qurbani. The weight verification gave me peace of mind. Highly recommended!",
            rating: 5,
        },
        {
            id: 3,
            name: "Asif Zaman",
            role: "Livestock Enthusiast",
            review:
                "Great collection of breeds. The animal I booked was exactly as described in the pictures.",
            rating: 4,
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Trusted by thousands of families across the country for their sacred sacrifice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                        >

                            <LuQuote
                                className="text-green-200 absolute -top-2 -right-2 rotate-12"
                                size={80}
                            />

                            <div className="relative z-10">

                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={
                                                i < item.rating
                                                    ? "text-orange-700"
                                                    : "text-gray-300"
                                            }
                                            size={16}
                                        />
                                    ))}
                                </div>

                                <p className="text-gray-700 italic mb-8 leading-relaxed">
                                    {item.review}
                                </p>

                                <div className="flex items-center gap-4">
                                    <FaUserCircle className="text-orange-700" size={44} />

                                    <div>
                                        <h4 className="font-bold text-gray-900 leading-none mb-1">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 font-medium">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default RatingSection;