import { getPart1QuestionsByCategory } from "@/libs/actions";
import Link from "next/link";
import { CURRENT_MONTH } from "@/models/currentMonth";
import { decodeURLSegment } from "@/libs/functions";
import type { Metadata } from "next";
import { Ad } from "@/components/Ad";
import { NewTag } from "@/components/NewTag";
import { SubTitle } from "@/components/SubTitle";

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

    return (
        <>
            <section className=" mt-10 lg:mt-20 border-b border-[#DCE4EC] pb-5">
                <h1 className="font-(family-name:--font-breeSerif) text-center my-2">
                    <span className=" block text-text-light lg:text-[1.2rem]">IELTS Speaking Part 1 Topic</span>
                    <span className="text-4xl lg:text-[2.2rem] text-text-strong">{_category}</span>
                </h1>
            </section>
            <ul className=" flex flex-col">
                {
                    questions.map((item, index) => (
                        <QuestionSection question={item} index={index} key={index}></QuestionSection>
                    ))
                }
            </ul>
            <ul className=" my-5 flex flex-col gap-3 font-sans text-blue-primary underline text-[1.1rem] font-semibold">
                <li>
                    <Link href={`/part1`} >
                        Latest Part 1 Topics for {CURRENT_MONTH} 🔥
                    </Link>
                </li>
                <li>
                    <Link href={`/part1`} >
                        Other IELTS Part 1 Topics
                    </Link>
                </li>
                <li>
                    <Link href={`/part2/Person`} >
                        IELTS Part 2&3 Questions
                    </Link>
                </li>
            </ul>

            <Ad />
        </>
    );
}

const QuestionSection = ({ question, index }: {
    question: {
        topic: string;
        answer: string | null;
        tip: string | null;
        v3_part1_category: {
            type: string | null;
        };
    };
    index: number;
}) => {
    return (
        <li className=" border-b border-[#DCE4EC] py-10">
            <span className="font-(family-name:--font-breeSerif) text-[1.4rem] text-text-strong mr-2">{index + 1}.</span>
            <h2 className=" inline font-(family-name:--font-breeSerif) text-[1.4rem] text-text-strong">{question.topic}</h2>
            {
                question.v3_part1_category?.type &&
                <NewTag></NewTag>
            }

            {
                question.answer &&
                (
                    <>
                        <SubTitle>Sample Answer</SubTitle>
                        <p className=" font-(family-name:--font-ptSerif) text-text-main text-[1.1rem]">
                            {question.answer}
                        </p>
                    </>
                )

            }

            {
                question.tip &&
                (
                    <>
                        <SubTitle>Tips & Strategies</SubTitle>
                        <p className=" font-(family-name:--font-ptSerif) text-text-main text-[1.1rem]">
                            {question.tip}
                        </p>
                    </>
                )

            }
        </li>
    )
}

