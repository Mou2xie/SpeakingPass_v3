import Image from "next/image";
import Link from "next/link";
import { getPart2TopicsByCategory } from "@/libs/actions";
import { CURRENT_MONTH } from "@/models/currentMonth";

export default async function PartTwoPage({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;

    const topics = await getPart2TopicsByCategory(category);
    const _topic = sortByCurrent(topics);

    return (
        <>
            <section className=" flex justify-around items-center h-20 lg:h-30 mt-20 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">PART 2&3</span>
                    <span className=" lg:text-2xl text-text-light">IELTS Speaking Questions</span>
                </h1>
                <Image src='/egg2.svg' alt="hero-image" width={100} height={100} className=" w-20 lg:w-30" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex gap-5 lg:gap-20 justify-center my-5 lg:my-10">
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
            <ul className=" flex flex-col gap-10 mb-10 lg:w-3/4 lg:mx-auto">
                {
                    _topic.map((topic, index) => (
                        <li key={index} className=" font-(family-name:--font-ptSerif) ">
                            <Link href={`/part2/detail/${topic.id}`} target="_blank">
                                <span className=" inline text-[1.2rem] line-clamp-2 text-text-main hover:text-blue-primary transition duration-200">{topic.topic}</span>
                                {
                                    topic.type === 'CURRENT' &&
                                    <span className=" text-red-500 text-[1.0rem] font-(family-name:--font-oswald) ml-3 ">{CURRENT_MONTH}</span>
                                }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

// sort topics with type 'CURRENT' first
const sortByCurrent = (arr: { topic: string, id: number, type: string | null }[]) => {
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