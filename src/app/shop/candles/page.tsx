"use client";

// Candles.js
import { useEffect } from "react";
import Image from "next/image";
import { useCart } from "../../shopping-cart/CartContext";

export default function Candles() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });

    document.querySelectorAll(".fade-in-section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const { addToCart } = useCart();

  const candles = [
    { id: 1, name: "Clove & Ylang Ylang Candle", image: "/candle.jpg", price: 5.0 },
    {
      id: 2,
      name: "Lavendar, Bee Balm & Coriander Candle",
      image: "/candle.jpg",
      price: 5.0,
    },
    // Add more candles as needed
  ];

  return (
    <main className="bg-white min-h-screen py-16 px-8">
      <section className="w-full py-16 px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-tertiary montserrat-alternates-regular mb-8">
            Candles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {candles.map((candle) => (
              <div
                key={candle.id}
                className="fade-in-section opacity-0 transition-opacity duration-1000"
              >
                <Image
                  src={candle.image}
                  alt={candle.name}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-4 text-xl font-semibold text-tertiary montserrat-alternates-regular">
                  {candle.name}
                </div>
                <div className="text-lg font-bold text-tertiary montserrat-regular">
                  ${candle.price}
                </div>
                <button
                  onClick={() => addToCart(candle)}
                  className="bg-primary text-tertiary py-2 px-4 rounded-md hover:bg-tertiary hover:text-primary transition-colors mt-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
