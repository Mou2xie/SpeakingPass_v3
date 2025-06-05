import Image from "next/image";
import { LanguagePicker } from "./LanguagePicker";
import { MNavMenu } from './MobileNavMenu';

export const NavBar = ({ lan }: { lan: string }) => {

    return (
        <nav className="flex items-center h-16 mx-5 lg:w-[1000px] lg:mx-auto">
            <a href={`/${lan}`} className=" hidden lg:inline">
                <Image src="/logo.svg" alt="logo" width={200} height={100} />
            </a>
            <div className=" lg:hidden">
                <MNavMenu lan={lan} />
            </div>
            <div className=" flex-1"></div>
            <ul className=" hidden lg:flex gap-8 font-(family-name:--font-ptSerif) text-[1.1rem] font-bold cursor-pointer">
                <a href={`/${lan}/booster`}>
                    <li className="text-[#FF5A5A] hover:text-blue-primary transition-all duration-300">🔥 Score Booster</li>
                </a>
                <a href={`/${lan}/bank`}>
                    <li className="hover:text-blue-primary transition-all duration-300">Question Bank</li>
                </a>
                <a href={`/${lan}/about`}>
                    <li className="hover:text-blue-primary transition-all duration-300">About</li>
                </a>
            </ul>
            <div className=" ml-10">
                <LanguagePicker lan={lan} />
            </div>
        </nav>
    );
}