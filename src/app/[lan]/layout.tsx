import { NavBar } from "@/components/NavBar"

export default async function Layout({ params, children }: { params: Promise<{ lan: string }>, children: React.ReactNode }) {
    const { lan } = await params;
    return (
        <>
            <NavBar lan={lan}></NavBar>
            {children}
        </>
    )
}