"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
        )
            .fromTo(
                subRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=1"
            )
            .fromTo(
                imgRef.current,
                { scale: 1.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" },
                "-=1.2"
            );

        // Parallax effect on scroll
        gsap.to(imgRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen w-full overflow-hidden bg-[#0a0a0a] text-[#f5f5f5] flex items-center justify-center"
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]"></div>

            {/* Hero Image Container */}
            <div
                ref={imgRef}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop"
                    alt="Coffee Background"
                    className="h-full w-full object-cover opacity-60"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center md:text-left">
                <div className="overflow-hidden">
                    <h1
                        ref={textRef}
                        className="text-[15vw] leading-[0.8] font-bold uppercase  text-[#f5f5f5] mix-blend-difference"
                    >
                        Authentic
                        <br />
                        <span className="text-[#d4a373]">Brew</span>
                    </h1>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6 overflow-hidden">
                    <p
                        ref={subRef}
                        className="text-lg md:text-xl max-w-md font-light text-gray-300"
                    >
                        Crafted with passion, brewed for perfection. Experience the finest coffee beans sourced from the heart of the mountains.
                    </p>

                    <button className="group flex items-center gap-3 px-8 py-4 bg-[#f5f5f5] text-[#0a0a0a] rounded-full font-bold uppercase tracking-wider hover:bg-[#d4a373] transition-colors duration-300 cursor-pointer">
                        <span>Order Now</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
