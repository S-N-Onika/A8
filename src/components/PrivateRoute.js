"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    return user && children;
};

export default PrivateRoute;