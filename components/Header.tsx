import Link from 'next/link'
import { Button } from './ui/button'
import React from 'react'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto">
                <Link href="/">
                    <h1>
                        <p className='text-4xl font-semibold'>The Farmer Field</p>
                        <p className={`text-2xl text-accent font-secondary`}>Our farms to your home</p>
                    </h1>
                </Link>
            </div>
        </header>
    )
}

export default Header