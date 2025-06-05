import { Main } from "@/components/Main";
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ lan: string }> }) {

    const { lan } = await params;

    return (
        <>
            <Main>
                <section className="flex flex-col items-center gap-4 justify-center my-10 lg:my-20">
                    <h1 className=" text-3xl lg:text-5xl text-center font-(family-name:--font-breeSerif) text-text-strong">IELTS Speaking Question Bank</h1>
                    <p className=" text-[1.0rem] lg:text-[1.4rem] text-center font-(family-name:--font-ptSerif) text-text-main">Get access to all past and latest IELTS Speaking questions to ace your test!</p>
                    <Image src='/heroimage.svg' alt="hero-image" width={280} height={30} className=" mt-5 lg:mt-10 lg:w-[500px]"></Image>
                </section>
            </Main>
        </>
    );
}