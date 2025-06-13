import { RiArrowLeftLine } from "@remixicon/react";

export default async function PartTwoDetail({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    return (
        <>
            <section className=" mt-20 lg:mt-30">
                <div className=" flex items-center justify-center text-text-light gap-0 hover:gap-1 transition-all duration-200">
                    <RiArrowLeftLine />
                    <span className=" font-(family-name:--font-oswald) lg:text-[1.2rem]">
                        PART 2 - Person
                    </span>
                </div>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <section className=" flex flex-col my-10 lg:w-2/3 lg:mx-auto">
                <h1 className=" font-(family-name:--font-breeSerif) text-[1.2rem] lg:text-[1.6rem] text-text-strong">Describe an interesting neighbor.</h1>
                <p className=" font-(family-name:--font-ptSerif) text-text-light mt-3 lg:text-[1.1rem]">You should say:</p>
                <ul className=" list-disc list-inside font-(family-name:--font-ptSerif) text-text-light lg:text-[1.1rem]">
                    <li className=" my-1">Who this person is</li>
                    <li className=" my-1">How you know this person</li>
                    <li className=" my-1">What you like about this person</li>
                    <li className=" my-1">And explain why you think this person is interesting</li>
                </ul>
                <h2 className=" font-(family-name:--font-breeSerif) text-[1.0rem] lg:text-[1.2rem] text-text-main my-3">Part 3 Example Questions</h2>
                <ol className=" list-decimal list-inside font-(family-name:--font-ptSerif) text-text-light lg:text-[1.1rem]">
                    <li className=" my-1">Who this person is</li>
                    <li className=" my-1">How you know this person</li>
                    <li className=" my-1">What you like about this person</li>
                    <li className=" my-1">And explain why you think this person is interesting</li>
                </ol>
            </section>
        </>
    );
}