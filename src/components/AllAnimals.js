"use client";

import { useState, useEffect } from "react";
import { HiOutlineLocationMarker, HiChevronDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const AllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [displayAnimals, setDisplayAnimals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => {
                setAnimals(data);
                setDisplayAnimals(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    const handleFilter = (type) => {
        if (type === "All") {
            setDisplayAnimals(animals);
        } else {
            const filtered = animals.filter(animal => animal.type === type);
            setDisplayAnimals(filtered);
        }
    };

    const handleSort = (order) => {
        let sorted = [...displayAnimals];
        if (order === "low-to-high") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (order === "high-to-low") {
            sorted.sort((a, b) => b.price - a.price);
        }
        setDisplayAnimals(sorted);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900"></div>
            </div>
        );
    }

    return (
        <main className="bg-[#FCF9F3] min-h-screen">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12">

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold text-green-900">Our Collection</h1>
                        <p className="text-gray-500 font-medium">Found {displayAnimals.length} animals available</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        <div className="relative w-full sm:w-64">
                            <select
                                onChange={(e) => handleFilter(e.target.value)}
                                className="w-full appearance-none bg-white border-2 border-green-100 text-green-900 py-3 px-5 pr-10 rounded-xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-900 transition-all shadow-sm"
                            >
                                <option value="All">All Categories</option>
                                <option value="Cow">Cows</option>
                                <option value="Goat">Goats</option>
                            </select>
                            <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-green-900 pointer-events-none" size={20} />
                        </div>

                        <div className="relative w-full sm:w-64">
                            <select
                                onChange={(e) => handleSort(e.target.value)}
                                className="w-full appearance-none bg-white border-2 border-green-100 text-green-900 py-3 px-5 pr-10 rounded-xl font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-900 transition-all shadow-sm"
                            >
                                <option value="">Sort by Price</option>
                                <option value="low-to-high">Price: Low to High</option>
                                <option value="high-to-low">Price: High to Low</option>
                            </select>
                            <HiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-green-900 pointer-events-none" size={20} />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {displayAnimals.length > 0 ? (
                        displayAnimals.map((animal) => (
                            <div key={animal.id} className="bg-white rounded-3xl border border-green-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col">
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={animal.image}
                                        alt={animal.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                        <span className="text-[10px] font-black text-green-900 uppercase tracking-widest">{animal.type}</span>
                                    </div>
                                </div>

                                <div className="p-6 space-y-2 flex-grow">
                                    <h3 className="text-xl font-extrabold text-gray-900">{animal.name}</h3>
                                    <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase">
                                        <span>{animal.weight} KG</span>
                                        <span className="text-gray-200">|</span>
                                        <span>{animal.age} Years Old</span>
                                    </div>
                                    <div className="text-xl font-black text-green-900">BDT {animal.price.toLocaleString()}</div>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm font-medium">
                                        <HiOutlineLocationMarker className="text-green-700" size={18} />
                                        <span>{animal.location}</span>
                                    </div>
                                    <Link
                                        href={`/details/${animal.id}`}
                                        className="block w-full text-center mt-6 py-3.5 bg-green-900 text-white font-bold rounded-2xl hover:bg-orange-900 shadow-md transition-all active:scale-95"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-400 font-bold">No animals found for this category.</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default AllAnimals;
