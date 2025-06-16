import Image from "next/image";
import { Title } from "@/components/Title";
import { PartOneSection } from "@/components/PartOneSection";
import { PartTwoSection } from "@/components/PartTwoSection";
import { getCurrentPart1Category, getCurrentPart2 } from "@/libs/actions";
import { Suspense } from "react";
import { FallbackPartOne, FallbackPartTwo } from "@/components/Fallback";

export default async function Page() {

    const part1Data = getCurrentPart1Category();
    const part2Data = getCurrentPart2();

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 mt-20 lg:mt-40">
                <h1 className=" text-3xl lg:text-5xl text-center font-(family-name:--font-breeSerif) text-text-strong">IELTS Speaking Question Bank</h1>
                <p className=" text-[1.0rem] lg:text-[1.4rem] text-center font-(family-name:--font-ptSerif) text-text-main">Get access to all past and latest IELTS Speaking questions to ace your test!</p>
                <Image src='/heroimage.svg' alt="hero-image" width={280} height={30} className=" mt-5 lg:mt-10 lg:w-[500px]"></Image>
            </section>
            <Title>Questions for <span className=" text-red-500">May-August</span></Title>
            <Suspense fallback={<FallbackPartOne length={20} />}>
                <PartOneSection data={part1Data} />
            </Suspense>
            <Suspense fallback={<FallbackPartTwo length={10} />}>
                <PartTwoSection data={part2Data} />
            </Suspense>
        </>
    );
}




