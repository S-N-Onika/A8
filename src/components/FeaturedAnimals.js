"use client";

import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";

const FeaturedAnimals = ({ animals }) => {
    if (!Array.isArray(animals) || animals.length === 0) {
        return (
            <div className="flex justify-center items-center py-20 text-gray-500">
                No animals found.
            </div>
        );
    }

    const featured = animals.slice(0, 4);

    return (
        <section className="py-20 bg-orange-50">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                <div className="flex justify-between items-center mb-12 px-2">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-green-900">
                        Featured Animals
                    </h2>

                    <Link
                        href="/animals"
                        className="px-6 py-2 bg-green-900 text-white rounded-full text-sm font-medium hover:bg-orange-900 transition"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((animal) => (
                        <div
                            key={animal.id}
                            className="bg-white rounded-2xl border border-green-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
                        >

                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={animal.image}
                                    alt={animal.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    priority={animal.id <= 4}
                                />
                            </div>

                            <div className="p-6 space-y-2 flex flex-col flex-grow">

                                <h3 className="text-xl font-bold text-black">
                                    {animal.name}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
                                    <span>{animal.weight} KG</span>
                                    <span>|</span>
                                    <span>{animal.age} Years</span>
                                </div>

                                <div className="text-xl font-black text-green-900">
                                    BDT {animal.price.toLocaleString()}
                                </div>

                                <div className="flex items-center gap-1 text-gray-600 text-sm font-medium">
                                    <HiOutlineLocationMarker className="text-green-700" size={18} />
                                    <span>{animal.location}</span>
                                </div>

                                <Link
                                    href={`/details/${animal.id}`}
                                    className="mt-auto block w-full text-center py-3 bg-green-900 text-white font-bold rounded-xl hover:bg-orange-900 transition-colors"
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