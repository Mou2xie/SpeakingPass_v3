import Image from "next/image";
import Link from "next/link";

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
        "Describe a skill you want to learn",
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

            <section className=" my-10 flex justify-center items-center gap-4">
                <div className="h-5 w-1 bg-blue-primary"></div>
                <h2 className="text-[1.2rem] lg:text-[1.4rem] text-text-main font-(family-name:--font-breeSerif) mb-1"> Topics for May-September</h2>
                <div className="h-5 w-1 bg-blue-primary"></div>
            </section>

            <section>
                <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald) font-[500]">PART 1</h3>
                <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 lg:w-4/5 lg:mx-auto">
                    {
                        topics1.map((topic, index) => (
                            <div key={index} className="font-(family-name:--font-ptSerif)">
                                <Link href={`/`}>
                                    <p className="text-center text-[1.2rem] font-bold text-text-main hover:text-blue-primary transition duration-200 ">{topic}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className=" my-15">
                <h3 className=" text-center text-[1.2rem] mb-5 text-text-light font-(family-name:--font-oswald) font-[500]">PART 2&3</h3>
                <div className=" flex flex-col gap-5 lg:w-2/3 lg:mx-auto">
                    {
                        topics2.map((topic, index) => (
                            <div key={index} className="font-(family-name:--font-ptSerif)">
                                <Link href={`/`}>
                                    <p className=" text-[1.2rem] font-bold text-text-main hover:text-blue-primary transition duration-200 ">{topic}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
}