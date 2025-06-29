import Image from "next/image";
import { Title } from "@/components/Title";
import { PartOneSection } from "@/components/PartOneSection";
import { PartTwoSection } from "@/components/PartTwoSection";
import { getCurrentPart1Category, getCurrentPart2 } from "@/libs/actions";
import { Suspense } from "react";
import { FallbackPartOne, FallbackPartTwo } from "@/components/Fallback";
import { CURRENT_MONTH } from "@/models/currentMonth";
import { Ad } from "@/components/Ad";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "latest IELTS Speaking Topics / Questions with Answers and Strategies | SpeakingPass",
    description: "Boost your IELTS Speaking score! Access a huge bank of recent and past questions for Part 1, 2, & 3. Check sample answers and strategies. Updated for 2025. Your #1 free resource for exam practice."
};

export default async function Page() {

    const part1Data = getCurrentPart1Category();
    const part2Data = getCurrentPart2();

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 mt-20 lg:mt-40">
                <h1 className=" text-3xl lg:text-5xl text-center font-(family-name:--font-breeSerif) text-text-strong">IELTS Speaking Question Bank</h1>
                <p className=" text-[1.0rem] lg:text-[1.4rem] text-center font-(family-name:--font-ptSerif) text-text-main">Get access to all past and latest IELTS Speaking questions to ace your test!</p>
                <Image src='/heroimage.svg' alt="two people are having the speaking test" width={280} height={30} className=" mt-5 lg:mt-10 lg:w-[500px]"></Image>
            </section>
            <Title>Latest Part 1 Topics</Title>
            <h3 className=" text-center font-sans text-red-500 text-[1.2rem] font-bold ">{CURRENT_MONTH}</h3>
            <Suspense fallback={<FallbackPartOne length={20} />}>
                <PartOneSection data={part1Data} />
            </Suspense>
            <Ad />
            <Title>Latest Part 2 Questions</Title>
            <h3 className=" text-center font-sans text-red-500 text-[1.2rem] font-bold ">{CURRENT_MONTH}</h3>
            <Suspense fallback={<FallbackPartTwo length={10} />}>
                <PartTwoSection data={part2Data} />
            </Suspense>
        </>
    );
}




