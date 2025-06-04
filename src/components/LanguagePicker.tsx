'use client'

import Image from "next/image";
import { useState } from "react";
import { languages } from "@/assets/languages";
import { RiArrowDropDownLine } from "@remixicon/react";

export const LanguagePicker = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    return (
        <>
            <div
                className=" relative flex items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <Image src={selectedLanguage.flag} width={25} height={20} alt={`${selectedLanguage.name} flag icon`} className=" rounded" />
                <RiArrowDropDownLine size={25} className={` text-text-light ${isOpen && " rotate-180"} duration-150`} />
                {
                    isOpen && (
                        <ul className="absolute top-10 z-10 bg-white shadow rounded-lg font-(family-name:--font-ptSerif)">
                            {languages.map((language) => (
                                <li
                                    key={language.code}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setSelectedLanguage(language);
                                        setIsOpen(false);
                                    }}
                                >
                                    <Image src={language.flag} width={20} height={15} alt={`${language.name} flag icon`} className="rounded" />
                                    {language.name}
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </>
    );
};