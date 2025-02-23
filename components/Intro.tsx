"use client";

import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <div>
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
                        className="mt-8 bg-gradient-to-br from-cal_poly_green-600 to-cal_poly_green-500 py-4 bg-clip-text text-center font-medium tracking-tight text-transparent flex items-center md:text-7xl gap-4"
                    >
                        <img className="col-span-2 w-32 object-contain lg:col-span-1" src="/logo.png" alt="The Farmer Field Logo" />
                        <div className="flex flex-col items-center gap-2">
                            <div className="text-3xl md:text-6xl">The Farmer Field</div>
                            <div className="text-xl md:text-3xl">Our farms to your home</div>
                        </div>
                    </motion.div>
                </LampContainer>
            </div>
        </div>
    )
}

export default Intro