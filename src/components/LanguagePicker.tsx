'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "@remixicon/react";
import type { TLanguages } from "@/models/languages";

const languageOptions:{
    name: string;
    flag: string;
    code: TLanguages;
}[] = [
    {
        name: "English",
        flag: "/gb.svg",
        code: "en"
    },
    {
        name: "中文",
        flag: "/cn.svg",
        code: "zh"
    },
    {
        name: "Русский",
        flag: "/ru.svg",
        code: "ru"
    },
    {
        name: "Français",
        flag: "/fr.svg",
        code: "fr"
    },
    {
        name: "हिंदी",
        flag: "/in.svg",
        code: "hi"
    },
];

export const LanguagePicker = ({ lan }: { lan: TLanguages }) => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const currentLanguageSegment = path.split("/")[1];
    const currentLanguage = languageOptions.find((l) => l.code === lan) || languageOptions[0];

    return (
        <>
            <div
                className=" relative flex items-center cursor-pointer py-1 select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Image src={currentLanguage.flag} width={28} height={20} alt={`${currentLanguage.name} flag icon`} className=" rounded" />
                <RiArrowDropDownLine size={25} className={` text-text-light ${isOpen && " rotate-180"} transition duration-150`} />
                {
                    isOpen && (
                        <ul className="absolute top-10 right-0 w-30 z-1 bg-white shadow rounded-lg font-(family-name:--font-ptSerif)">
                            {languageOptions.map((language) => (
                                <li key={language.code} className="p-3 hover:bg-gray-100">
                                    <Link href={path.replace(currentLanguageSegment, language.code)} className="flex items-center gap-2">
                                        <Image src={language.flag} width={20} height={15} alt={`${language.name} flag icon`} className="rounded" />
                                        {language.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        </>
    );
};