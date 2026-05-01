"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";


export default function Home() {
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data))
      .catch((err) => console.error("Error loading animals:", err));
  }, []);

  return (
    <main>
      <Navbar />
      <Banner />
      
    </main>
  );
}
