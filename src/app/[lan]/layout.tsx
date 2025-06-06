import { NavBar } from "@/components/NavBar";
import { Footer } from '@/components/Footer';
import { Main } from "@/components/Main";
import { validateLanguage } from '@/libs/functions';

export default async function Layout({ params, children }: { params: Promise<{ lan: string }>, children: React.ReactNode }) {
    const { lan } = await params;
    const validLan = validateLanguage(lan);
    return (
        <>
            <NavBar lan={validLan}></NavBar>
            <Main>
                {children}
            </Main>
            <Footer></Footer>
        </>
    )
}

