'use client'

import { use } from 'react';
import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";
import { encodeURLSegment } from "@/libs/functions";

type Data = { data: Promise<{ category: string }[]> }

export const PartOneSection = ({ data }: Data) => {

    const topics = use(data);

    return (
        <section className=" my-10">
            <ul className=" grid grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    topics.map((topic, index) => (
                        <li key={index} className="font-(family-name:--font-ptSerif) text-center">
                            <Link href={`/part1/${encodeURLSegment(topic.category)}`} target='_blank' className=" text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 ">
                                {topic.category}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className=' flex justify-center my-10'>
                <Link href={`/part1`} className="text-[1.2rem] font-sans flex items-center gap-0 hover:gap-1 transition-all duration-200 text-blue-primary ">
                    More Part 1 Topics
                    <RiArrowRightSLine></RiArrowRightSLine>
                </Link>
            </div>
        </section>
    )
}