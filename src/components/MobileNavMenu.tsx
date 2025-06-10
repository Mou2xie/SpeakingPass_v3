'use client'

import { RiMenu2Line } from "@remixicon/react"
import { useState } from "react"
import type { TLanguages } from "@/models/languages"

export const MNavMenu = ({ lan }: { lan: TLanguages }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative" onClick={() => setIsOpen(!isOpen)}>
            <RiMenu2Line size={30} />
            {
                isOpen && (
                    <ul className=" absolute left-0 w-45 top-8 p-3 font-(family-name:--font-ptSerif) list-disc list-inside text-[1.1rem] bg-white shadow rounded">
                        <a href={`/${lan}`}><li className=" py-2">Home</li></a>
                        <a href={`/${lan}/booster`} className=" text-[#FF5A5A]"><li className=" py-2">Score Booster</li></a>
                        <a href={`/${lan}/bank`}><li className=" py-2">Question Bank</li></a>
                        <a href={`/${lan}/about`}><li className=" py-2">About</li></a>
                    </ul>
                )
            }
        </div>
    )
}