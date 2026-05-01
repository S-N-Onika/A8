"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { LuArrowRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const sliderRef = useRef(null);

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
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        arrows: true,
    };

    const images = ["/banner.png", "/banner1.jpeg", "/banner2.jpeg", "/banner3.jpeg", "/banner4.webp"];

    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] overflow-hidden bg-gray-100">
            <div
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white/90 text-green-900 p-3 rounded-full shadow-lg hover:bg-green-900 hover:text-white transition-all hidden md:block"
                onClick={() => sliderRef.current.slickPrev()}
            >
                <LuChevronLeft size={24} />
            </div>
            <div
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white/90 text-green-900 p-3 rounded-full shadow-lg hover:bg-green-900 hover:text-white transition-all hidden md:block"
                onClick={() => sliderRef.current.slickNext()}
            >
                <LuChevronRight size={24} />
            </div>

            <div className="absolute inset-0 z-0">
                <Slider ref={sliderRef} {...settings} className="h-full">
                    {images.map((image, index) => (
                        <div key={index} className="relative h-[500px] md:h-[800px] w-full">
                            <Image
                                src={image}
                                alt={`Slide ${index}`}
                                fill
                                priority={index === 0}
                                className="object-cover object-center opacity-60"
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[500px] md:h-[650px] flex items-center pointer-events-none">
                <div className="max-w-2xl text-center md:text-left space-y-6 pointer-events-auto">
                    <h1 className="text-4xl md:text-7xl font-extrabold text-orange-900 leading-tight">
                        Find Perfect Animals<br />For
                        <span className="text-green-900"> Qurbani</span>
                    </h1>
                    <p className="text-gray-700 text-lg md:text-xl font-medium">
                        Explore the finest collection of healthy livestock from top local farms.
                        Book your choice today with trust and ease.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                        <Link
                            href="/animals"
                            className="group flex items-center justify-center gap-2 bg-green-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-orange-900 hover:-translate-y-1 transition-all"
                        >
                            Browse All Animals
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .slick-dots { bottom: 30px; }
                .slick-dots li button:before { color: #14532d !important; font-size: 10px; opacity: 0.5; }
                .slick-dots li.slick-active button:before { color: #14532d !important; opacity: 1; }
                .slick-list, .slick-track { height: 100%; }
            `}</style>
        </section>
    );
};

export default Banner;
