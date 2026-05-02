"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import TrustBar from "@/components/TrustBar";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import TipsBreeds from "@/components/Tips-Breeds";
import RatingSection from "@/components/Rating";
import Footer from "@/components/Footer";

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
      
      <TrustBar />

      <div id="featured">
        <FeaturedAnimals animals={animals} />
      </div>

      <div id="Tips-Breeds" className="scroll-mt-20">
        <TipsBreeds />
      </div>

      <RatingSection />
      <Footer />
    </main>
  );
}
