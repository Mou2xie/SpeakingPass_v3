import Image from 'next/image';

export const Ad = () => {
    return (
        <section className=" p-6 w-full my-10 flex flex-col gap-1 lg:gap-0 lg:flex-row lg:items-center border border-grey rounded-2xl">
            <Image src="/lp_logo.svg" alt="lingoPick extension icon" width={60} height={60} className=" hidden lg:block" />
            <div className=" flex flex-col gap-2 lg:gap-0 lg:ml-5">
                <h3 className=" text-2xl text-[#61ECD7] font-extrabold">Build vocabulary the easy, natural way</h3>
                <p className=" text-text-light">AI-powered browser extension to help you improve vocabulary while surfing the web</p>
            </div>
            <div className=" grow"></div>
            <a href="https://www.lingopick.net/" target="_blank" className=" self-end lg:self-center bg-[#61ECD7] px-5 py-2 text-white font-bold rounded-full hover:bg-[#4dc1b7] transition duration-200">
                Try LingoPick
            </a>
        </section>
    );
}