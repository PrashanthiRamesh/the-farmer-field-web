"use client"

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type PageTransitionProps = {
    children: React.ReactNode; // Type for children
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 0, transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" } }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition