import Image from 'next/image';

export default function Loading() {
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
                            <li className="text-[1.2rem] font-(family-name:--font-oswald) text-text-light" key={index}>
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
            <ul className=" flex flex-col gap-10 mb-10 lg:w-3/4 lg:mx-auto">
                {
                    Array.from({ length: 20 }).map((_, index) => (
                        <li key={index} className=" skeleton h-8 w-3/4"></li>
                    ))
                }
            </ul>
        </>
    );
}