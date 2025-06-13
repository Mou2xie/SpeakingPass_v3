
import { RiArrowLeftLine } from "@remixicon/react";

export default async function PartOneDetail({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;

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
    ];

    return (
        <>
            <section className=" mt-20 lg:mt-30">
                <div className=" flex items-center justify-center text-text-light gap-0 hover:gap-1 transition-all duration-200">
                    <RiArrowLeftLine />
                    <span className=" font-(family-name:--font-oswald) lg:text-[1.2rem]">
                        PART 1
                    </span>
                </div>
                <h1 className="font-(family-name:--font-breeSerif) text-3xl lg:text-[2.5rem] text-text-strong text-center">
                    {category}
                </h1>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <section className=" flex flex-col gap-5 my-10 lg:w-2/3 lg:mx-auto">
                {
                    topics2.map((topic, index) => (
                        <div key={index} className=" font-(family-name:--font-ptSerif) ">
                            <p className="text-[1.2rem] line-clamp-2 text-text-main">{topic}</p>
                        </div>
                    ))
                }
            </section>
        </>
    );

}