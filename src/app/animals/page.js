"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AllAnimals from "@/components/AllAnimals";
import Footer from "@/components/Footer";

export default function Page() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch("/animals.json")
            .then((res) => res.json())
            .then((data) => setAnimals(data));
    }, []);

    return (
        <main>
            <Navbar />
            <AllAnimals animals={animals} />
            <Footer />
        </main>
    );
}
