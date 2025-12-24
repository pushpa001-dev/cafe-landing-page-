"use client";

import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#050505] text-[#f5f5f5] pt-24 pb-12 border-t border-[#1a1a1a]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-[12vw] md:text-[8vw] leading-none font-bold uppercase text-[#1a1a1a] select-none">
                            Cafe Noir
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-[#d4a373]">Location</h4>
                        <p className="text-gray-400 font-light">
                            123 Espresso Lane<br />
                            Coffee District<br />
                            NY 10012
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-bold uppercase tracking-widest text-[#d4a373]">Hours</h4>
                        <p className="text-gray-400 font-light">
                            Mon - Fri: 7am - 8pm<br />
                            Sat - Sun: 8am - 9pm
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1a1a1a] gap-6">
                    <p className="text-sm text-gray-500">© 2024 Cafe Noir. All rights reserved.</p>

                    <div className="flex gap-6">
                        {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-all duration-300">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
