import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/Title";
import { getAllPart1Categories } from "@/libs/actions";
import { CURRENT_MONTH } from "@/models/currentMonth";
import { encodeURLSegment } from "@/libs/functions";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `All latest and past IELTS Speaking Part 1 Topics ${CURRENT_MONTH} | SpeakingPass`,
    description: `Looking for IELTS Speaking Part 1 topics? Explore our definitive list covering everything from past classics to the very latest questions. All new topics for ${CURRENT_MONTH} are clearly marked. Your complete resource to practice and prepare.`,
};

export default async function PartOnePage() {

    const categories = await getAllPart1Categories();
    const currentCategories = categories.filter(category => category.type === 'CURRENT').map(category => category.category);
    const mustTestCategories = categories.filter(category => category.type === 'MUST').map(category => category.category);
    const pastCategories = categories.filter(category => category.type === null).map(category => category.category);

    return (
        <>
            <section className=" flex justify-around items-center h-20 lg:h-30 mt-20 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">PART 1</span>
                    <span className=" lg:text-2xl text-text-light">IELTS Speaking Questions</span>
                </h1>
                <Image src='/egg1.svg' alt="hero-image" width={100} height={100} className=" w-15 lg:w-24" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <Title><span className=" text-red-500">Questions for {CURRENT_MONTH}</span></Title>
            <QuestionList topics={currentCategories} />
            <Title>Must-test Questions</Title>
            <QuestionList topics={mustTestCategories} />
            <Title>Past Questions</Title>
            <QuestionList topics={pastCategories} />
        </>
    )
}

const QuestionList = ({ topics }: { topics: string[] }) => {
    return (
        <section className=" grid grid-cols-2 lg:grid-cols-4 gap-10 my-10">
            {
                topics.map((topic, index) => (
                    <div key={index} className="font-(family-name:--font-ptSerif)">
                        <Link href={`/part1/${encodeURLSegment(topic)}`} target="_black">
                            <p className="text-center text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 ">{topic}</p>
                        </Link>
                    </div>
                ))
            }
        </section>
    );
}