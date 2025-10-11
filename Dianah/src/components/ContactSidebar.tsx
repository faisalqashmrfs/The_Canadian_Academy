"use client";
import React from "react";

export default function ContactSidebar() {
    return (
        <div className="hidden sm:flex fixed right-0 top-1/3 z-50 bg-red-600 rounded-l-xl shadow-lg px-4 py-5">
            <div className="flex items-center gap-4">
                {/* النص على يسار الأيقونات */}
                <span className="text-white text-sm font-semibold tracking-wide whitespace-nowrap">
                    Chat With Us
                </span>

                {/* الأيقونات داخل دوائر */}
                <div className="flex flex-col gap-4 items-center">
                    <a href="https://facebook.com/your-page" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                            <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                        </div>
                    </a>

                    <a href="https://instagram.com/your-page" target="_blank" rel="noopener noreferrer">
                        <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                            <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                        </div>
                    </a>

                    <a href="tel:+1234567890">
                        <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                            <img src="/icons/phone.svg" alt="Call" className="w-5 h-5" />
                        </div>
                    </a>

                    <a href="#">
                        <div className="bg-white rounded-full p-2 shadow hover:scale-110 transition">
                            <img src="/icons/clock.svg" alt="Hours" className="w-5 h-5" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
