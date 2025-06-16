import Image from 'next/image';
import { FallbackPartOne } from '@/components/Fallback';

export default function Loading() {
    return (
        <>
            <section className=" flex justify-around items-center h-20 lg:h-30 mt-20 lg:mt-30">
                <h1 className="font-(family-name:--font-breeSerif) flex flex-col">
                    <span className=" text-3xl lg:text-[2.4rem] text-text-strong">PART 1</span>
                    <span className=" lg:text-2xl text-text-light">IELTS Speaking Questions</span>
                </h1>
                <Image src='/egg1.svg' alt="hero-image" width={100} height={100} className=" w-15 lg:w-24" ></Image>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <FallbackPartOne length={30} />
        </>
    );
}