
export default function Loading() {
    return (
        <>
            <section className=" mt-20 lg:mt-30 flex flex-col items-center gap-4">
                <div className=" skeleton w-15 h-8"></div>
                <div className=" skeleton w-40 h-12"></div>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <ul className=" flex flex-col gap-10 my-10 lg:w-2/3 lg:mx-auto">
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <li key={index} className=" skeleton h-8 w-2/3"></li>
                    ))
                }
            </ul>
        </>
    );
}