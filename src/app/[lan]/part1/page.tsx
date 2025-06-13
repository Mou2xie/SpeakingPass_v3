import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/Title";

export default function PartOnePage() {

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

    return (
        <>
            <section className=" flex justify-around items-center mt-20 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">PART 1</span>
                    <span className=" lg:text-2xl text-text-light">IELTS Speaking Questions</span>
                </h1>
                <Image src='/egg1.svg' alt="hero-image" width={100} height={100} className=" w-15 lg:w-24" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <Title>Questions for May-September</Title>
            <QuestionList topics={topics1} />
            <Title>Must-test Questions</Title>
            <QuestionList topics={topics1} />
            <Title>Past Questions</Title>
            <QuestionList topics={topics1} />
        </>
    )
}

const QuestionList = ({ topics }: { topics: string[] }) => {
    return (
        <section className=" grid grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                topics.map((topic, index) => (
                    <div key={index} className="font-(family-name:--font-ptSerif)">
                        <Link href={`/`}>
                            <p className="text-center text-[1.2rem] text-text-main hover:text-blue-primary transition duration-200 ">{topic}</p>
                        </Link>
                    </div>
                ))
            }
        </section>
    );
}