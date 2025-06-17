import Image from 'next/image';

export default function Loading() {
    return (
        <>
            <section className=" flex justify-around items-center h-20 lg:h-30 mt-20 lg:mt-30">
                <div className=' skeleton w-100 h-30'></div>
                <div className=' skeleton w-50 h-30'></div>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex gap-5 lg:gap-20 justify-center my-5 lg:my-10">
                {
                    Array.from({length:4}).map((item, index) => {
                        return (
                            <li className=" skeleton w-20 h-8" key={index}>
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