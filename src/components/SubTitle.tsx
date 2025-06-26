
export const SubTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" flex gap-2 items-center mt-5 mb-2">
            <div className=" h-4 w-1 bg-blue-primary"></div>
            <h3 className=" font-(family-name:--font-oswald) text-text-light text-[1.1rem]">{children}</h3>
        </div>
    );
}