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
                    <div className=" absolute left-0 w-40 top-8 p-5 gap-3 font-(family-name:--font-ptSerif) text-[1.1rem] flex flex-col bg-white shadow rounded">
                        <a href="" className=" text-[#FF5A5A]">Score Booster</a>
                        <a href="">Question Bank</a>
                        <a href="">About</a>
                    </div>
                )
            }
        </div>
    )
}