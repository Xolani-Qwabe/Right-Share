"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
    const pathname = usePathname();
    return (
        <nav>
            <Link href={"/"}
                className={pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-300"}
            >
                Home
            </Link>
            <Link href={"/how-it-works"}
                className={pathname === "/how-it-works" ? "font-bold mr-4" : "mr-4 text-blue-300"}
            >
                How It Works
            </Link>
            <Link href={"/about"}
                className={pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-300"}
            >

                About
            </Link>
            <Link href={"/threads"}
                className={pathname === "/threads" ? "font-bold mr-4" : "mr-4 text-blue-300"}
            >

                Threads
            </Link>
            <Link href={"/faq"}
                className={pathname === "/faq" ? "font-bold mr-4" : "mr-4 text-blue-300"}
            >

                FAQ
            </Link>
        </nav>
    );
}

export default Navigation;
