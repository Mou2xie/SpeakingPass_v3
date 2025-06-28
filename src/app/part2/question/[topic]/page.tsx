
import { getPart2TopicByTopic } from "@/libs/actions";
import Link from "next/link";
import { CURRENT_MONTH } from "@/models/currentMonth";
import { decodeURLSegment } from "@/libs/functions";
import type { Metadata } from "next";
import { NewTag } from "@/components/NewTag";
import { SubTitle } from "@/components/SubTitle";
import { Ad } from "@/components/Ad";

export async function generateMetadata(
    { params }: { params: Promise<{ topic: string }> }
): Promise<Metadata> {
    const question = decodeURLSegment((await params).topic);
    return {
        title: `${question} - IELTS Speaking Part 2 & 3 Questions | SpeakingPass`,
        description: `Prepare for the IELTS topic ${question}. This page features the full Part 2 cue card and a list of related Part 3 follow-up questions to help you understand the topic in depth. Start building your ideas now!`
    }
}

export default async function PartTwoDetail({ params }: { params: Promise<{ topic: string }> }) {

    const { topic } = await params;
    const question = await getPart2TopicByTopic(decodeURLSegment(topic));
    const isCurrent = question?.type === 'CURRENT';

    return (
        <>
            <section className=" mt-10 lg:mt-20 border-b border-[#DCE4EC] pb-5">
                <h3 className="font-(family-name:--font-breeSerif) text-center my-2 text-text-light lg:text-[1.2rem]">
                    IELTS Speaking Part 2 Question
                </h3>
            </section>
            <section className=" py-10 border-b border-[#DCE4EC]">
                <h1 className=" inline font-(family-name:--font-breeSerif) text-[1.4rem] text-text-strong">{question?.topic}</h1>
                {
                    isCurrent &&
                    <NewTag></NewTag>
                }
                <p className=" text-[1.1rem] text-text-light font-(family-name:--font-ptSerif) mt-5">You should say:</p>
                <ul className=" list-disc list-inside">
                    {
                        question?.subTopics.map((item, index) => (
                            <li key={index} className="text-[1.1rem] text-text-light font-(family-name:--font-ptSerif)">{item}</li>
                        ))
                    }
                </ul>
                {
                    question?.answer &&
                    (
                        <>
                            <SubTitle>Sample Answer</SubTitle>
                            <p className=" font-(family-name:--font-ptSerif) text-text-main text-[1.1rem]">{question.answer}</p>
                        </>
                    )
                }
                {
                    question?.tip &&
                    (
                        <>
                            <SubTitle>Tips & Strategies</SubTitle>
                            <p className=" font-(family-name:--font-ptSerif) text-text-main text-[1.1rem]">{question.tip}</p>
                        </>
                    )
                }
                {
                    question?.part3 &&
                    (
                        <>
                            <h3 className=" font-(family-name:--font-breeSerif) text-[1.4rem] text-text-strong mt-10">Part 3 Example Question</h3>
                            <ol className=" list-decimal list-inside mt-5">
                                {
                                    question?.part3.map((item, index) => (
                                        <li key={index} className="text-[1.1rem] text-text-light font-(family-name:--font-ptSerif) my-2">
                                            <h2 className=" inline">{item}</h2>
                                        </li>
                                    ))
                                }
                            </ol>
                        </>
                    )
                }
            </section>

            <ul className=" my-5 flex flex-col gap-3 font-sans text-blue-primary underline text-[1.1rem] font-semibold">
                <li>
                    <Link href={`/part2/Person`} >
                        Latest Part 2 Questions for {CURRENT_MONTH} 🔥
                    </Link>
                </li>
                <li>
                    <Link href={`/part2/${question?.category}`} >
                        Other IELTS Part 2 Questions of Category: {question?.category}
                    </Link>
                </li>
                <li>
                    <Link href={`/part1`} >
                        IELTS Speaking Part 1 Topics
                    </Link>
                </li>
            </ul>

            <Ad />
        </>
    );
}