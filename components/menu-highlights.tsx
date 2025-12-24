"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MENU_ITEMS = [
    {
        name: "Velvet Latte",
        desc: "Smooth espresso with steamed oat milk and vanilla bean.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop",
    },
    {
        name: "Noir Cold Brew",
        desc: "24-hour steeped brew with notes of chocolate and cherry.",
        price: "$5.00",
        image: "https://images.pexels.com/photos/2067404/pexels-photo-2067404.jpeg",
    },
    {
        name: "Golden Croissant",
        desc: "Buttery, flaky pastry baked fresh every morning.",
        price: "$4.50",
        image: "https://images.pexels.com/photos/18954033/pexels-photo-18954033.jpeg",
    },
];

export default function MenuHighlights() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
            }
        );
    }, []);

    return (
        <section id="menu" className="py-24 bg-[#0F0F0F] text-[#f5f5f5]" ref={containerRef}>
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase mb-4">
                        Menu <span className="text-[#d4a373] italic font-serif lowercase">highlights</span>
                    </h2>
                    <p className="text-gray-400">Curated specifically for your taste.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {MENU_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="group relative overflow-hidden bg-[#1a1a1a] rounded-lg cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 relative z-10 bg-[#1a1a1a] transition-colors duration-300 group-hover:bg-[#d4a373] group-hover:text-[#0a0a0a]">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-2xl font-bold uppercase font-anton">{item.name}</h3>
                                    <span className="text-xl font-bold">{item.price}</span>
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-[#0a0a0a]/80 font-manrope">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
