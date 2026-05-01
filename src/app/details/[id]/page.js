"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiOutlineLocationMarker, HiOutlineScale, HiOutlineCalendar, HiX } from "react-icons/hi";

const AnimalDetails = () => {
    const { id } = useParams();
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);
    const [isImageOpen, setIsImageOpen] = useState(false); // State for the image modal

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setAnimal(found);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        e.target.reset();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    if (loading) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCF9F3]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900 mb-4"></div>
            <p className="text-green-900 font-bold animate-pulse uppercase tracking-widest text-sm">Fetching Details...</p>
        </div>
    );

    if (!animal) return <div className="min-h-screen flex items-center justify-center text-red-600 font-bold uppercase tracking-widest text-xl">Animal Not Found</div>;

    return (
        <main className="bg-[#FCF9F3] min-h-screen relative">
            <Navbar />

            {/* --- IMAGE LIGHTBOX MODAL --- */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
                    onClick={() => setIsImageOpen(false)}
                >
                    <button className="absolute top-10 right-10 text-white hover:text-orange-500 transition-colors">
                        <HiX size={40} />
                    </button>
                    <div className="relative w-full max-w-5xl h-[80vh]">
                        <Image
                            src={animal.image}
                            alt={animal.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}

            {/* Success Toast */}
            {showToast && (
                <div className="fixed top-24 right-5 z-50 animate-in fade-in slide-in-from-right duration-300">
                    <div className="bg-green-900 text-white px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center gap-3 border-4 border-orange-500">
                        <span className="text-xl">✅</span>
                        <div>
                            <p>Booking Successful!</p>
                            <p className="text-[10px] opacity-70 font-medium uppercase">Our team will contact you soon</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        {/* --- CLICKABLE IMAGE --- */}
                        <div
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white cursor-zoom-in group"
                            onClick={() => setIsImageOpen(true)}
                        >
                            <Image src={animal.image} alt={animal.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" priority />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-bold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">Click to Enlarge</span>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-green-100 shadow-sm space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">{animal.category}</span>
                                    <h1 className="text-2xl font-black text-gray-900 mt-3 tracking-tight">{animal.name}</h1>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Total Price</p>
                                    <p className="text-2xl font-black text-green-900">BDT {animal.price.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-50">
                                <div className="flex flex-col items-center gap-1">
                                    <HiOutlineScale className="text-green-700" size={24} />
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Weight</p>
                                    <p className="font-black text-gray-900">{animal.weight} KG</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <HiOutlineCalendar className="text-green-700" size={24} />
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Age</p>
                                    <p className="font-black text-gray-900">{animal.age} Years</p>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <HiOutlineLocationMarker className="text-green-700" size={24} />
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">Origin</p>
                                    <p className="font-black text-gray-900">{animal.location}</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-black text-gray-900 uppercase">Animal Description</h4>
                                <p className="text-gray-500 text-sm">"{animal.description}"</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-green-100 shadow-xl h-fit sticky top-24">
                        <div className="mb-8">
                            <h3 className="text-2xl font-black text-green-950">Book Your Sacrifice</h3>
                            <p className="text-gray-400 text-sm font-medium">Fill in your details to secure this {animal.type.toLowerCase()}.</p>
                        </div>

                        <form onSubmit={handleBooking} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Full Name</label>
                                <input type="text" required placeholder="Full Name" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Email Address</label>
                                <input type="email" required placeholder="Email" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Phone Number</label>
                                <input type="tel" required placeholder="Phone Number" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Collection Address</label>
                                <textarea rows="3" required placeholder="Address" className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:bg-white focus:border-green-900 transition-all font-medium text-sm outline-none resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-green-900 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-orange-900 hover:-translate-y-1 transition-all">
                                Confirm Booking
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
};

export default AnimalDetails;
