"use client";

import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";

const FeaturedAnimals = ({ animals }) => {
    if (!animals) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900"></div>
            </div>
        );
    }

    const featured = animals.slice(0, 4);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                <div className="flex justify-between items-center mb-12 px-2">
                    <h2 className="text-2xl md:text-4xl font-bold text-green-900">Featured Animals</h2>
                    <Link
                        href="/animals"
                        className="px-6 py-2 bg-green-900 text-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-orange-900 transition"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((animal) => (
                        <div
                            key={animal.id}
                            className="bg-white rounded-2xl border border-green-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group w-full"
                        >
                            <div className="h-55 overflow-hidden bg-gray-100">
                                <img
                                    src={animal.image}
                                    alt={animal.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight h-7 overflow-hidden">
                                    {animal.name}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase tracking-wide">
                                    <span>{animal.weight} KG</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{animal.age} Years Old</span>
                                </div>

                                <div className="text-2xl font-black text-green-900">
                                    BDT {animal.price.toLocaleString()}
                                </div>

                                <div className="flex items-center gap-1 text-gray-600 text-sm font-medium">
                                    <HiOutlineLocationMarker className="text-green-700" size={18} />
                                    <span>{animal.location}, Bangladesh</span>
                                </div>

                                <Link
                                    href={`/details/${animal.id}`}
                                    className="block w-full text-center mt-6 py-3 bg-green-900 text-white font-bold rounded-xl hover:bg-orange-900 shadow-md transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedAnimals;
