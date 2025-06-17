import { RiArrowLeftLine } from "@remixicon/react";
import { getPart1QuestionsByCategory } from "@/libs/actions";
import Link from "next/link";
import { CURRENT_MONTH } from "@/models/currentMonth";
import { decodeURLSegment } from "@/libs/functions";
import type { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
    const category = decodeURLSegment((await params).category);

    return {
        title: `${category} Questions - IELTS Speaking Part 1 Practice | SpeakingPass`,
        description: `Master the '${category}' topic for IELTS Speaking Part 1. Our complete list features all latest and past questions to ensure you're fully prepared. Practice your answers and walk into the exam with confidence!`,
    }
}

export default async function PartOneDetail({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;
    const _category = decodeURLSegment(category);
    const questions = await getPart1QuestionsByCategory(_category);
    const isCurrent = questions[0]?.v3_part1_category?.type === 'CURRENT';

    return (
        <>
            <section className=" mt-20 lg:mt-30">
                <Link className=" flex items-center justify-center text-text-light gap-0 hover:gap-1 transition-all duration-200"
                    href={'/part1'}
                >
                    <RiArrowLeftLine />
                    <span className=" font-(family-name:--font-oswald) lg:text-[1.2rem]">
                        PART 1
                    </span>
                </Link>
                <h1 className="font-(family-name:--font-breeSerif) text-center my-2">
                    <span className=" block text-text-main lg:text-[1.2rem]">IELTS Speaking Part 1 Topic</span>
                    <span className="text-3xl lg:text-[2.5rem] text-text-strong">{_category}</span>
                </h1>
                {
                    isCurrent && (
                        <p className=" text-center text-red-500 font-(family-name:--font-oswald) lg:text-[1.0rem]">
                            Questions for {CURRENT_MONTH}
                        </p>
                    )
                }
            </section>
            <hr className=" text-[#DCE4EC] my-5" />
            <ul className=" flex flex-col gap-10 my-10 lg:w-2/3 lg:mx-auto">
                {
                    questions.map((question, index) => (
                        <li key={index} className=" font-(family-name:--font-ptSerif) text-[1.2rem] line-clamp-2 text-text-main ">
                            {question.topic}
                        </li>
                    ))
                }
            </ul>
        </>
    );

}