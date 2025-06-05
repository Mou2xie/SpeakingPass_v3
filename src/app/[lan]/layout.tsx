import { NavBar } from "@/components/NavBar";
import { TLanguages, supportedLanguages } from "@/assets/languages";

export default async function Layout({ params, children }: { params: Promise<{ lan: string }>, children: React.ReactNode }) {
    const { lan } = await params;
    const validLan: TLanguages = validateLanguage(lan);
    return (
        <>
            <NavBar lan={validLan}></NavBar>
            {children}
        </>
    )
}

const validateLanguage: (lan: string) => TLanguages = (lan: string) => {
    return supportedLanguages.includes(lan as TLanguages) ? (lan as TLanguages) : "en";
}