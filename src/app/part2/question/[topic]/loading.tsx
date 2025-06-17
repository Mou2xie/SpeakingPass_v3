
export default function Loading() {
    return (
        <>
            <section className=" mt-20 lg:mt-30 flex justify-center">
                <div className=" skeleton w-30 h-10"></div>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <section className=" flex flex-col my-10 lg:w-2/3 lg:mx-auto">
                <div className=" skeleton h-12 w-full"></div>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="skeleton h-8 w-1/2 my-2"></div>
                    ))
                }
                <div className="skeleton h-10 w-3/4"></div>
                {
                    Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="skeleton h-8 w-1/2 my-2"></div>
                    ))
                }
            </section>
        </>
    );
}