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
        autoplaySpeed: 3000,
        pauseOnHover: false,
        fade: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        arrows: false,
    };

    const images = ["/banner.png", "/banner1.jpeg", "/banner2.jpeg", "/banner3.jpeg", "/banner4.webp"];

    return (
        <section className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden bg-gray-100">
            <div
                className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white/10 hover:bg-green-900 text-green-900 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all hidden md:block"
                onClick={() => sliderRef.current.slickPrev()}
            >
                <LuChevronLeft size={24} />
            </div>
            <div
                className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white/10 hover:bg-green-900 text-green-900 hover:text-white p-2 md:p-3 rounded-full shadow-lg transition-all hidden md:block"
                onClick={() => sliderRef.current.slickNext()}
            >
                <LuChevronRight size={24} />
            </div>

            <div className="absolute inset-0 z-0">
                <Slider ref={sliderRef} {...settings} className="h-full">
                    {images.map((image, index) => (
                        <div key={index} className="relative h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] w-full">
                            <Image
                                src={image}
                                alt={`Slide ${index}`}
                                fill
                                priority={index === 0}
                                sizes="100vw"
                                className="object-cover object-center opacity-60"
                            />
                            <div className="absolute inset-0 bg-black/40 z-10" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl w-full text-center md:text-left space-y-4 md:space-y-6">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg leading-tight">
                        Book Verified Livestock<br className="hidden sm:block" /> For
                        <span className="text-green-900"> Qurbani</span>
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-md mx-auto md:mx-0">
                        Explore the finest collection of healthy livestock from top local farms. Book your choice today with trust and ease.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 md:pt-4">
                        <Link
                            href="/animals"
                            className="group inline-flex items-center justify-center gap-2 bg-green-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-lg hover:bg-orange-900 hover:-translate-y-1 transition-all active:scale-95"
                        >
                            Browse All Animals
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .slick-dots { 
                    bottom: 15px; 
                }
                @media (min-width: 768px) {
                    .slick-dots { bottom: 30px; }
                }
                .slick-dots li button:before { 
                    color: #14532d !important; 
                    font-size: 8px; 
                    opacity: 0.5; 
                }
                .slick-dots li.slick-active button:before { 
                    color: #14532d !important; 
                    opacity: 1; 
                    font-size: 12px;
                }
                .slick-list, .slick-track { height: 100%; }
            `}</style>
        </section>
    );
};

export default Banner;
