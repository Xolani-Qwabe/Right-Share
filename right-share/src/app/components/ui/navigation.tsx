"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletConnect from "@/app/connect-wallet/page";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const pathname = usePathname();
    return (
        <nav className="flex justify-between items-center  p-4 text-white">
            <div className="ml-4">
                <Link href={"/"} className="flex gap-2 items-center">
                    {/* <FontAwesomeIcon icon={faHome} className="text-blue-300 text-2xl" />  */}
                    <p className="font-extrabold text-2xl">Right Share</p>    
                </Link>
            </div>
           <div>
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

           </div>
           <div className="mr-4">
            <WalletConnect />
           </div>

        </nav>
    );
}

export default Navigation;
