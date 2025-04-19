"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
        name: "team", // work
        path: "/team",
    },
    {
        name: "contact",
        path: "/contact",
    }
]

const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className="flex gap-8">
            {
                links.map((link, index) => {
                    return (
                        <Link href={link.path}
                            className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                            key={index}>

                            {link.name}
                        </Link>
                    )
                })
            }
        </nav>
    )
}

export default Nav