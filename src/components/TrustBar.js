"use client";

import { LuShieldCheck, LuBadgeDollarSign, LuClock, LuHeartPulse } from "react-icons/lu";

const TrustBar = () => {
    const features = [
        {
            icon: <LuHeartPulse className="text-green-900" size={24} />,
            title: "Healthy & Verified",
            desc: "Doctor certified livestock",
        },
        {
            icon: <LuBadgeDollarSign className="text-green-900" size={24} />,
            title: "Transparent Pricing",
            desc: "Best value for your money",
        },
        {
            icon: <LuClock className="text-green-900" size={24} />,
            title: "Fast Booking",
            desc: "Secure your animal in seconds",
        },
        {
            icon: <LuShieldCheck className="text-green-900" size={24} />,
            title: "Safe Delivery",
            desc: "Trusted by 1000+ families",
        },
    ];

    return (
        <section className="bg-white py-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#FCF9F3] border border-green-900 rounded-3xl md:rounded-full py-8 px-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 shadow-sm">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-5 w-full md:w-auto relative group">
                            <div className="w-14 h-14 rounded-full bg-white border border-green-100 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                                {feature.icon}
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-md font-bold text-green-950 leading-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-sm text-gray-500 font-medium">
                                    {feature.desc}
                                </p>
                            </div>

                            {index !== features.length - 1 && (
                                <div className="hidden lg:block absolute -right-8 xl:-right-12 h-10 w-[1px] bg-green-200/50"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
