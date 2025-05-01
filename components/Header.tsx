import Link from 'next/link'
import { Button } from './ui/button'
import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1>
                        <p className='text-4xl font-semibold'>The Farmer Field</p>
                        <p className={`text-2xl text-accent font-secondary`}>Our farms to your home</p>
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/subscribe">
                        <Button className="bg-accent text-primary hover:bg-accent-hover hover:text-white transition-all">
                            Subscribe
                        </Button>
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header