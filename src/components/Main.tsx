export const Main = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className=" mx-5 min-h-screen mt-16 lg:w-[1000px] lg:mx-auto">
            {children}
        </main>
    );
}
