

export const FallbackPartOne = ({ length }: { length: number }) => {
    return (
        <section className=" my-10">
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-10">
                {Array.from({ length }).map((_, index) => (
                    <div className=" flex justify-center" key={index}>
                        <div className="skeleton h-8 w-30"></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export const FallbackPartTwo = ({ length }: { length: number }) => {
    return (
        <section className=" my-10">
            <div className=" flex flex-col gap-10 lg:w-5/6 mx-auto">
                {
                    Array.from({ length }).map((_, index) => (
                        <div key={index} className="skeleton h-8 w-3/4"></div>
                    ))
                }
            </div>
        </section>
    )
}