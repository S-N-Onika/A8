"use client";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/80 hover:bg-green-900 hover:text-white text-green-900 p-2 rounded-full transition-all shadow-md hidden md:block"
            onClick={onClick}
        >
            <LuChevronRight size={30} />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/80 hover:bg-green-900 hover:text-white text-green-900 p-2 rounded-full transition-all shadow-md hidden md:block"
            onClick={onClick}
        >
            <LuChevronLeft size={30} />
        </div>
    );
};

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        fade: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const images = ["/banner.png", "/banner1.jpeg", "/banner2.jpeg", "/banner3.jpeg", "/banner4.webp"];

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Slider {...settings} className="h-full">
                    {images.map((img, index) => (
                        <div key={index} className="relative h-[500px] md:h-[700px]">
                            <img
                                src={img}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover object-center opacity-50"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[500px] md:h-[650px] flex items-center pointer-events-none">
                <div className="max-w-2xl text-center md:text-left space-y-6 pointer-events-auto">
                    <h1 className="text-4xl md:text-7xl font-extrabold text-orange-900 leading-tight">
                        Find Perfect Sacrifices<br />For
                        <span className="text-green-900"> Qurbani</span>
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl font-medium">
                        Explore the finest collection of healthy cows and goats from top <br className="hidden md:block" /> local farms. Book your sacrifice animal today with trust and ease.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                        <Link
                            href="/animals"
                            className="group flex items-center justify-center gap-2 bg-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-800 hover:-translate-y-1 transition-all"
                        >
                            Browse All Animals
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .slick-dots { bottom: 25px; }
                .slick-dots li button:before { color: #14532d !important; font-size: 12px; }
                .slick-dots li.slick-active button:before { color: #14532d !important; }
            `}</style>
        </section>
    );
};

export default Banner;
