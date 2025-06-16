import { RiArrowLeftLine } from "@remixicon/react";
import { getPart1QuestionsByCategory } from "@/libs/actions";
import Link from "next/link";
import { CURRENT_MONTH } from "@/models/currentMonth";

export default async function PartOneDetail({ params }: { params: Promise<{ category: string }> }) {

    const { category } = await params;
    const _category = addSpace(category);
    const questions = await getPart1QuestionsByCategory(_category);
    const isCurrent = questions[0]?.v3_part1_category?.type === 'CURRENT';

    return (
        <>
            <section className=" mt-20 lg:mt-30">
                <Link className=" flex items-center justify-center text-text-light gap-0 hover:gap-1 transition-all duration-200"
                    href={'/part1'}
                >
                    <RiArrowLeftLine />
                    <span className=" font-(family-name:--font-oswald) lg:text-[1.2rem]">
                        PART 1
                    </span>
                </Link>
                <h1 className="font-(family-name:--font-breeSerif) text-3xl lg:text-[2.5rem] text-text-strong text-center">
                    {_category}
                </h1>
                {
                    isCurrent && (
                        <p className=" text-center text-red-500 font-(family-name:--font-oswald) lg:text-[1.0rem]">
                            Questions for {CURRENT_MONTH}
                        </p>
                    )
                }
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex flex-col gap-10 my-10 lg:w-2/3 lg:mx-auto">
                {
                    questions.map((question, index) => (
                        <li key={index} className=" font-(family-name:--font-ptSerif) text-[1.2rem] line-clamp-2 text-text-main ">
                            {question.topic}
                        </li>
                    ))
                }
            </ul>
        </>
    );

}

// replace %20 with space in camelCase strings
const addSpace = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/%20/g, ' ');
}