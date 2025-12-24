"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });

        tl.fromTo(
            textRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        ).fromTo(
            imageRef.current,
            { x: 50, opacity: 0, scale: 0.9 },
            { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
        );
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-24 md:py-32 bg-[#0a0a0a] text-[#f5f5f5]"
        >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div ref={textRef} className="space-y-8">
                    <h2 className="text-6xl md:text-8xl font-bold uppercase leading-none text-[#d4a373]">
                        Our <br /> Story
                    </h2>
                    <p className="text-xl md:text-2xl font-light text-gray-300 max-w-lg leading-relaxed">
                        Founded in the chaos of the city, Cafe Noir is a sanctuary for those who seek silence in every sip. We believe coffee is not just a drink, but a ritual.
                    </p>
                    <div className="h-[1px] w-24 bg-[#d4a373]"></div>
                    <div className="grid grid-cols-2 gap-8 pt-4">
                        <div>
                            <h3 className="text-3xl font-bold">20+</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">Years Brewing</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">12k</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-widest">Happy Cups</p>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div ref={imageRef} className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop"
                        alt="Barista Pouring"
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#d4a373] rounded-full opacity-20 hidden md:block"></div>
                </div>

            </div>
        </section>
    );
}
