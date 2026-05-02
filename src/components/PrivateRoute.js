"use client";

import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login");
        }
    }, [user, loading, router]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCF9F3]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900 mb-4"></div>
                <p className="text-green-900 font-bold animate-pulse uppercase tracking-widest text-sm">Authenticating...</p>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return null;
};

export default PrivateRoute;
