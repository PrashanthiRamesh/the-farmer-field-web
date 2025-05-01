"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about", // resume
        path: "/about",
    },
    {
        name: "services", // services
        path: "/services",
    },
    {
        name: "team", // work,
        path: "/team",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col" aria-describedby="mobile-nav-description">
                <VisuallyHidden>
                    <SheetTitle>Mobile navigation- TFF</SheetTitle>
                    <SheetDescription id="mobile-nav-description">
                        Use the mobile navigation menu to explore different sections of the website.
                        Tap on the menu icon to open the navigation drawer, then select a link to navigate to the desired page.
                    </SheetDescription>
                </VisuallyHidden>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1>
                            <p className='text-4xl font-semibold'>The Farmer Field</p>
                            <p className={`text-2xl text-accent font-secondary`}>Our farms to your home</p>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path} key={index}
                                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav