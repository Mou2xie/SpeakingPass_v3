'use client'

import Image from "next/image";
import { MNavMenu } from './MobileNavMenu';
import { useEffect, useState } from 'react';
import Link from "next/link";

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`
            flex items-center h-16 mx-5 lg:mx-auto lg:w-[1000px]
            fixed top-0 left-0 right-0 z-1
            transition-all duration-300
            ${isScrolled ? 'bg-white' : 'bg-transparent'}
        `}>
            <a href={`/`} className=" hidden lg:inline">
                <Image src="/logo.svg" alt="logo" width={200} height={100} />
            </a>
            <div className=" lg:hidden">
                <MNavMenu />
            </div>
            <div className=" flex-1"></div>
            <ul className=" hidden lg:flex gap-8 font-(family-name:--font-ptSerif) text-[1.2rem] font-bold cursor-pointer">
                <li className="hover:text-blue-primary transition-all duration-300">
                    <Link href={`/part1`}>Part 1</Link>
                </li>
                <li className="hover:text-blue-primary transition-all duration-300">
                    <Link href={`/part2/Person`}>Part 2&3</Link>
                </li>
            </ul>
        </nav>
    );
}