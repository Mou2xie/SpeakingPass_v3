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
            <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald)">PART 1</h3>
            <ul className=" grid grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    topics.map((topic, index) => (
                        <li key={index} className="font-(family-name:--font-ptSerif)">
                            <Link href={`/part1/${encodeURLSegment(topic.category)}`} target='_blank' className="text-center text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 ">
                                {topic.category}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <Link href={`/part1`} className="text-[1.2rem] flex items-center gap-0 hover:gap-1 transition-all duration-200 text-blue-primary ">
                        More
                        <RiArrowRightSLine></RiArrowRightSLine>
                    </Link>
                </li>

            </ul>
        </section>
    )
}