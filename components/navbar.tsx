"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
        );
    }, []);

    const links = [
        { name: "About", href: "#about" },
        { name: "Menu", href: "#menu" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-[#f5f5f5]"
        >
            <Link href="/" className="text-2xl font-bold uppercase tracking-widest font-anton">
                Noir.
            </Link>

            <div className="hidden md:flex gap-8">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm font-medium uppercase tracking-wider hover:text-[#d4a373] transition-colors relative group"
                    >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#d4a373] transition-all group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            <div className="md:hidden">
                {/* Mobile menu trigger placeholder */}
                <button className="text-sm uppercase font-bold">Menu</button>
            </div>
        </nav>
    );
}
