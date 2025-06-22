'use client'

import { RiMenu2Line } from "@remixicon/react"
import { useState } from "react"
import Link from "next/link";

export const MNavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className=" relative" onClick={() => setIsOpen(!isOpen)}>
            <RiMenu2Line size={30} />
            {
                isOpen && (
                    <ul className=" absolute left-0 w-45 top-8 p-3 font-(family-name:--font-ptSerif) list-disc list-inside text-[1.1rem] bg-white shadow rounded">
                        <li className=" py-2"><Link href={`/`}>Home</Link></li>
                        <li className=" py-2"><Link href={`/part1`}>Part 1</Link></li>
                        <li className=" py-2"><Link href={`/part2/Person`}>Part 2&3</Link></li>
                        <li className=" py-2"><Link href={'https://www.lingopick.net/'} target="_blank">Vocabulary Booster 🚀</Link></li>
                    </ul>
                )
            }
        </div>
    )
}