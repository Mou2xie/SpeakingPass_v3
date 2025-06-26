import Image from "next/image";
import Link from "next/link";
import { getPart2TopicsByCategory } from "@/libs/actions";
import { encodeURLSegment } from "@/libs/functions";
import type { Metadata } from "next";
import { Ad } from "@/components/Ad";
import { NewTag } from "@/components/NewTag";

export async function generateMetadata(
    { params }: { params: Promise<{ category: string }> }
): Promise<Metadata> {
    const { category } = await params;
    return {
        title: `${category}: IELTS Speaking Part 2 Topic Collection | SpeakingPass`,
        description: `Master all IELTS Part 2 topics on how to '${category}'. This comprehensive collection features new and classic cue cards within this category. Learn the common structure and vocabulary to confidently answer any related question.`,
    }
}


export default async function PartTwoPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;

    const topics = await getPart2TopicsByCategory(category);
    const _topic = sortByCurrent(topics);

    return (
        <>
            <section className=" flex justify-around items-center h-30 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">IELTS Speaking Part 2 Questions</span>
                    <span className=" lg:text-2xl text-text-light mt-1">Latest & Past Questions</span>
                </h1>
                <Image src='/egg2.svg' alt="Two cute eggs icon representing new ideas" width={100} height={100} className=" w-20 lg:w-30" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex justify-around lg:justify-center lg:gap-15 my-8">
                {
                    ['Person', 'Object', 'Activity', 'Place'].map((item, index) => {
                        return (
                            <Link href={`/part2/${item}`} key={index}>
                                <li className={`text-[1.2rem] font-(family-name:--font-oswald) ${item === category ? 'text-blue-primary border-b-2 border-blue-primary' : 'text-text-light'} hover:text-blue-primary transition duration-200`}>
                                    {item}
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
            <ul className=" flex flex-col gap-10 mb-10 lg:w-4/5 lg:mx-auto">
                {
                    _topic.map((topic, index) => (
                        <li key={index} >
                            <Link href={`/part2/question/${encodeURLSegment(topic.topic)}`} target="_blank">
                                <span className=" inline text-[1.2rem] line-clamp-2 font-(family-name:--font-ptSerif) text-text-main hover:text-blue-primary transition duration-200">{topic.topic}</span>
                                {
                                    topic.type === 'CURRENT' &&
                                    <NewTag />
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Ad />
        </>
    )
}

// sort topics with type 'CURRENT' first
const sortByCurrent = (arr: { topic: string, type: string | null }[]) => {
    return arr.sort((a, b) => {
        if (a.type === 'CURRENT' && b.type === null) {
            return -1;
        }
        if (a.type === null && b.type === 'CURRENT') {
            return 1;
        }
        return 0;
    });

}