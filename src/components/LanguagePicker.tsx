'use client'

import Image from "next/image";
import { useState } from "react";
import { LANGUAGES } from "@/assets/languages";
import { RiArrowDropDownLine } from "@remixicon/react";

export const LanguagePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]);

    return (
        <>
            <div
                className=" relative flex items-center cursor-pointer py-1 select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src={selectedLanguage.flag} width={28} height={20} alt={`${selectedLanguage.name} flag icon`} className=" rounded" />
                <RiArrowDropDownLine size={25} className={` text-text-light ${isOpen && " rotate-180"} transition duration-150`} />
                {
                    isOpen && (
                        <ul className="absolute top-10 right-0 w-30 z-1 bg-white shadow rounded-lg font-(family-name:--font-ptSerif)">
                            {LANGUAGES.map((lan) => (
                                <li
                                    key={lan.code}
                                    className=" flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => setSelectedLanguage(lan)}
                                >
                                    <Image src={lan.flag} width={20} height={15} alt={`${lan.name} flag icon`} className="rounded" />
                                    {lan.name}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </>
    );
};