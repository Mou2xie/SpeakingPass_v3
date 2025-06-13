import Image from "next/image";
import Link from "next/link";

export default function PartTwoPage() {

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
            <section className=" flex justify-around items-center mt-20 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">PART 2&3</span>
                    <span className=" lg:text-2xl text-text-light">IELTS Speaking Questions</span>
                </h1>
                <Image src='/egg2.svg' alt="hero-image" width={100} height={100} className=" w-20 lg:w-30" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex gap-5 lg:gap-20 justify-center my-5">
                {
                    ['Person', 'Object', 'Activity', 'Place'].map((item, index) => {
                        return (
                            <Link href={`/`} key={index}>
                                <li className=" text-[1.2rem] font-(family-name:--font-oswald) text-text-light">
                                    {item}
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
            <section className=" flex flex-col gap-5 mb-10 lg:w-2/3 lg:mx-auto">
                {
                    topics2.map((topic, index) => (
                        <div key={index} className=" font-(family-name:--font-ptSerif) ">
                            <Link href={`/`}>
                                <p className="text-[1.2rem] line-clamp-2 text-text-main hover:text-blue-primary transition duration-200">{topic}</p>
                            </Link>
                        </div>
                    ))
                }
            </section>
        </>
    )
}