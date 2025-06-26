
export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className=" mt-10 lg:mt-15 flex justify-center items-center gap-4">
            <span className=" text-blue-primary font-extrabold">/</span>
            <h2 className="text-center text-[1.3rem] lg:text-[1.5rem] text text-text-strong font-(family-name:--font-breeSerif) mb-1"> {children}</h2>
            <span className=" text-blue-primary font-extrabold">/</span>
        </section>
    )
}