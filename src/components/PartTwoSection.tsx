'use client'

import { use } from 'react';
import Link from "next/link";
import { RiArrowRightSLine } from "@remixicon/react";
import { encodeURLSegment } from "@/libs/functions";

type Data = { data: Promise<{ topic: string }[]> }

export const PartTwoSection = ({ data }: Data) => {

    const topics = use(data);

    return (
        <section className=" my-10">
            <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald)">PART 2&3</h3>
            <div className=" flex flex-col gap-10 lg:w-5/6 mx-auto">
                {
                    topics.map((topic, index) => (
                        <div key={index} className="font-(family-name:--font-ptSerif)">
                            <Link href={`/part2/detail/${encodeURLSegment(topic.topic)}`} target='_black'>
                                <p className=" text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 line-clamp-2 ">{topic.topic}</p>
                            </Link>
                        </div>
                    ))
                }
                <Link href={`/part2/Person`} className=" text-[1.2rem] flex items-center justify-center gap-0 hover:gap-1 transition-all duration-200 text-blue-primary ">
                    More
                    <RiArrowRightSLine></RiArrowRightSLine>
                </Link>
            </div>
        </section>
    )
}