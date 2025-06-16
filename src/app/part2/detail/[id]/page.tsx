import { RiArrowLeftLine } from "@remixicon/react";
import { getPart2TopicById } from "@/libs/actions";
import Link from "next/link";

export default async function PartTwoDetail({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;
    const topic = await getPart2TopicById(Number(id));

    return (
        <>
            <section className=" mt-20 lg:mt-30">
                <Link className=" flex items-center justify-center text-text-light gap-0 hover:gap-1 transition-all duration-200"
                    href={`/part2/${topic?.category}`}>
                    <RiArrowLeftLine />
                    <span className=" font-(family-name:--font-oswald) lg:text-[1.2rem]">
                        PART 2 - {topic?.category}
                    </span>
                </Link>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <section className=" flex flex-col my-10 lg:w-2/3 lg:mx-auto">
                <h1 className=" font-(family-name:--font-breeSerif) text-[1.2rem] lg:text-[1.6rem] text-text-strong">{topic?.topic}</h1>
                <p className=" font-(family-name:--font-ptSerif) text-text-light mt-3 lg:text-[1.1rem]">You should say:</p>
                <ul className=" list-disc list-inside font-(family-name:--font-ptSerif) text-text-light lg:text-[1.1rem]">
                    {
                        topic?.subTopics.map((subTopic, index) => (
                            <li key={index} className=" my-1">{subTopic}</li>
                        ))
                    }
                </ul>
                <h2 className=" font-(family-name:--font-breeSerif) text-[1.0rem] lg:text-[1.2rem] text-text-main my-3">Part 3 Example Questions</h2>
                <ol className=" list-decimal list-inside font-(family-name:--font-ptSerif) text-text-light lg:text-[1.1rem]">
                    {
                        topic?.part3.map((part, index) => (
                            <li key={index} className=" my-1">{part}</li>
                        ))
                    }
                </ol>
            </section>
        </>
    );
}