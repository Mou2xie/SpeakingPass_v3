import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/Title";
import { RiArrowRightSLine } from "@remixicon/react";

export default async function Page({ params }: { params: Promise<{ lan: string }> }) {

    const { lan } = await params;

    const topics1 = [
        "Home",
        "Work",
        "Study",
        "Hometown",
        "Family",
        "Friends",
        "Food",
        "Travel",
        "Health",
        "Shopping",
        "Technology",
        "Books",
        "Music",
        "Movies",
        "Sports"
    ];

    const topics2 = [
        "Descrip a person you admire",
        "Describe a memorable event",
        "Describe a place you visited",
        "Describe a hobby you enjoy",
        "Describe a skill you want to learn Describe a skill you want to learn Describe a skill you want to learn",
        "Describe a goal you achieved",
        "Describe a challenge you faced",
        "Describe a book you read recently",
        "Describe a movie you watched recently",
    ]

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-4 mt-20 lg:mt-40">
                <h1 className=" text-3xl lg:text-5xl text-center font-(family-name:--font-breeSerif) text-text-strong">IELTS Speaking Question Bank</h1>
                <p className=" text-[1.0rem] lg:text-[1.4rem] text-center font-(family-name:--font-ptSerif) text-text-main">Get access to all past and latest IELTS Speaking questions to ace your test!</p>
                <Image src='/heroimage.svg' alt="hero-image" width={280} height={30} className=" mt-5 lg:mt-10 lg:w-[500px]"></Image>
            </section>
            <Title>Questions for May-September</Title>
            <PartOneSection topics1={topics1} />
            <PartTwoSection topics2={topics2} />
        </>
    );
}

const PartOneSection = ({ topics1 }: { topics1: string[] }) => {
    return (
        <section className=" my-10">
            <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald)">PART 1</h3>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    topics1.map((topic, index) => (
                        <div key={index} className="font-(family-name:--font-ptSerif)">
                            <Link href={`/`}>
                                <p className="text-center text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 ">{topic}</p>
                            </Link>
                        </div>
                    ))
                }
                <Link href={'/'} className="text-[1.2rem] flex items-center justify-center gap-0 hover:gap-1 transition-all duration-200 text-blue-primary ">
                    More
                    <RiArrowRightSLine></RiArrowRightSLine>
                </Link>
            </div>
        </section>
    )
}

const PartTwoSection = ({ topics2 }: { topics2: string[] }) => {
    return (
        <section className=" my-10">
            <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald)">PART 2&3</h3>
            <div className=" flex flex-col gap-5 lg:w-5/6 mx-auto">
                {
                    topics2.map((topic, index) => (
                        <div key={index} className="font-(family-name:--font-ptSerif)">
                            <Link href={`/`}>
                                <p className=" text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 line-clamp-2 ">{topic}</p>
                            </Link>
                        </div>
                    ))
                }
                <Link href={'/'} className=" text-[1.2rem] flex items-center justify-center gap-0 hover:gap-1 transition-all duration-200 text-blue-primary ">
                    More
                    <RiArrowRightSLine></RiArrowRightSLine>
                </Link>
            </div>
        </section>
    )
}