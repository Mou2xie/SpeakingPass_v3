'use client'

import { RiMenu2Line } from "@remixicon/react"
import { useState } from "react"

export const MNavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative" onClick={() => setIsOpen(!isOpen)}>
            <RiMenu2Line size={30} />
            {
                isOpen && (
                    <ul className=" absolute left-0 w-45 top-8 p-3 font-(family-name:--font-ptSerif) list-disc list-inside text-[1.1rem] bg-white shadow rounded">
                        <a href="" className=" text-[#FF5A5A]"><li className=" py-2">Score Booster</li></a>
                        <a href=""><li className=" py-2">Question Bank</li></a>
                        <a href=""><li className=" py-2">About</li></a>
                    </ul>
                )
            }
        </div>
    )
}