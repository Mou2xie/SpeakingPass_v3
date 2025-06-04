import Image from "next/image";
import { LanguagePicker } from "./LanguagePicker";

export const Nav = () => {
    return (
        <nav className="flex items-center h-16 mx-5 lg:w-[1000px] lg:mx-auto">
            <Image src="/logo.svg" alt="logo" width={200} height={100} />
            <div className=" flex-1"></div>
            <ul className=" hidden lg:flex gap-8 font-(family-name:--font-ptSerif) text-[1.1rem] font-bold cursor-pointer">
                <li className="hover:text-blue-primary transition-all duration-300">Question Bank</li>
                <li className="text-[#FF5A5A] hover:text-blue-primary transition-all duration-300">🔥 Score Booster</li>
                <li className="hover:text-blue-primary transition-all duration-300">About</li>
            </ul>
            <div className=" ml-15">
            <LanguagePicker />
            </div>
        </nav>
    );
}