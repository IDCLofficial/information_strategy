'use client';
import Image from "next/image";
import NavLinks from "./NavLinks"
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import OfficeHours from "./OfficeHours";
import { useState } from "react";
import Sidebar from "./Sidebar";

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <header className="fixed top-0 left-0 right-0 z-50 border-b-[0.1px] bg-[#232c39]/50 backdrop-blur-sm">
            <nav className="flex items-center justify-between w-full px-[1rem] md:px-[3rem] py-[1.1rem] border-[#FFFFFF]">
                <Link href='/' className="flex items-center gap-3 mb-2">
                    <Image src="/logo.png" alt="Imo State Logo" width={40} height={40} />
                    {/* <span className="font-semibold max-md:hidden text-sm text-white leading-tight">
                    Imo State Ministry of <br />
                    Agriculture
                    </span> */}
                </Link>
                {/* Desktop NavLinks */}
                <div className="hidden lg:block">
                    <NavLinks />
                </div>
                {/* Hamburger for Mobile */}
                <button
                    className="lg:hidden text-white text-3xl focus:outline-none"
                    aria-label="Open navigation menu"
                    onClick={() => setSidebarOpen(true)}
                    >
                    <FiMenu />
                </button>
            </nav>
            <OfficeHours />
            {/* Mobile Sidebar */}
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </header>
    )
}