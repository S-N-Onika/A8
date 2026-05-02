"use client";

import React from "react";
import {
    LuShieldCheck,
    LuBadgeDollarSign,
    LuClock,
    LuHeartPulse,
} from "react-icons/lu";

const TrustBar = () => {
    const features = [
        {
            icon: <LuHeartPulse className="text-green-900 w-6 h-6" />,
            title: "Healthy & Verified",
            desc: "Doctor certified livestock",
        },
        {
            icon: <LuBadgeDollarSign className="text-green-900 w-6 h-6" />,
            title: "Transparent Pricing",
            desc: "Best value for your money",
        },
        {
            icon: <LuClock className="text-green-900 w-6 h-6" />,
            title: "Fast Booking",
            desc: "Secure your animal in seconds",
        },
        {
            icon: <LuShieldCheck className="text-green-900 w-6 h-6" />,
            title: "Safe Delivery",
            desc: "Trusted by 1000+ families",
        },
    ];

    return (
        <section className="bg-white py-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#FCF9F3] border border-green-100 rounded-3xl md:rounded-full py-8 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 shadow-sm">

                    {features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <div className="flex items-center gap-5 w-full md:w-auto lg:pr-8 group hover:bg-white/40 transition-colors rounded-xl px-3 py-2">

                                <div className="w-14 h-14 rounded-full bg-white border border-green-100 flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                    {feature.icon}
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="text-base font-bold text-green-900 leading-tight">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 font-medium">
                                        {feature.desc}
                                    </p>
                                </div>

                            </div>

                            {index !== features.length - 1 && (
                                <div className="hidden lg:block w-px h-10 bg-green-200/50"></div>
                            )}
                        </React.Fragment>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default TrustBar;