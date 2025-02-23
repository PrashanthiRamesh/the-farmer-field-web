"use client";

import React from 'react'
import { LampContainer } from '@/components/ui/lamp'
import { motion } from "framer-motion";
import { FlipWords } from '@/components/ui/flip-words';
import Navbar from '@/components/Navbar';
import { Products } from './Products';

const Intro = () => {
    const VISION_KEYWORDS = [
        "Sustainability",
        "Innovation",
        "Eco-friendliness",
        "Organic Practices",
        "Efficiency",
        "Health & Wellness",
        "Future-forward Solutions",
        "Clean Growth"
    ];

    const MISSION_KEYWORDS = [
        "Quality Standards",
        "Community Support",
        "Sustainable Growth",
        "Nature-first Approach",
        "Environmental Responsibility",
        "Integrity & Trust",
        "Education & Awareness",
        "Technology-driven Solutions",
        "Balanced Ecosystem"
    ];

    return (
        <div>
            <Navbar className="top-2" />
            <div>
                <LampContainer>
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center justify-center gap-40"
                    >
                        <div className="mt-8 bg-gradient-to-br from-cal_poly_green-600 to-cal_poly_green-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent flex items-center md:text-7xl gap-4">
                            <img className="col-span-2 w-32 object-contain lg:col-span-1" src="/logo.png" alt="The Farmer Field Logo" />
                            <div className="flex flex-col items-center gap-2">
                                <div className="text-3xl md:text-6xl">The Farmer Field</div>
                                <div className="text-xl md:text-3xl">Our farms to your home</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-start px-4 font-work-sans w-full">
                            <div className="text-lg md:text-xl mx-auto font-normal text-cal_poly_green-400 dark:text-neutral-400">
                                Hydroponics rooted in
                                <span className="inline-block w-96">
                                    <FlipWords words={VISION_KEYWORDS} />
                                </span>
                                <br />
                                driven by
                                <span className="inline-block w-96">
                                    <FlipWords words={MISSION_KEYWORDS} />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </LampContainer>
                <Products />
            </div>
        </div>
    )
}

export default Intro