
export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className=" mt-10 lg:mt-15 flex justify-center items-center gap-4">
            <div className="h-5 w-1 bg-blue-primary"></div>
            <h2 className="text-[1.2rem] lg:text-[1.4rem] text-text-main font-(family-name:--font-breeSerif) mb-1"> {children}</h2>
            <div className="h-5 w-1 bg-blue-primary"></div>
        </section>
    )
}