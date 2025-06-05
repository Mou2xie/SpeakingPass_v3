import Image from "next/image";
import { LanguagePicker } from "./LanguagePicker";
import { MNavMenu } from './MobileNavMenu';
import type { TLanguages } from "@/assets/languages";

const text: Record<TLanguages, {
    scoreBooster: string;
    questionBank: string;
    about: string;
}> = {
    en: {
        scoreBooster: "🔥 Score Booster",
        questionBank: "Question Bank",
        about: "About"
    },
    zh:{
        scoreBooster: "🔥 当季备考指南",
        questionBank: "题库",
        about: "关于"
    },
    ru:{
        scoreBooster: "🔥 Ускоритель баллов",
        questionBank: "Банк вопросов",
        about: "О нас"
    },
    fr:{
        scoreBooster: "🔥 Booster de score",
        questionBank: "Banque de questions",
        about: "À propos"
    },  
    hi:{
        scoreBooster: "🔥 स्कोर बूस्टर",
        questionBank: "प्रश्न बैंक",
        about: "के बारे में"
    }
};

export const NavBar = ({ lan }: { lan: TLanguages }) => {

    return (
        <nav className="flex items-center h-16 mx-5 lg:w-[1000px] lg:mx-auto">
            <a href={`/${lan}`} className=" hidden lg:inline">
                <Image src="/logo.svg" alt="logo" width={200} height={100} />
            </a>
            <div className=" lg:hidden">
                <MNavMenu lan={lan} />
            </div>
            <div className=" flex-1"></div>
            <ul className=" hidden lg:flex gap-8 font-(family-name:--font-ptSerif) text-[1.1rem] font-bold cursor-pointer">
                <a href={`/${lan}/booster`}>
                    <li className="text-[#FF5A5A] hover:text-blue-primary transition-all duration-300">{text[lan].scoreBooster}</li>
                </a>
                <a href={`/${lan}/bank`}>
                    <li className="hover:text-blue-primary transition-all duration-300">{text[lan].questionBank}</li>
                </a>
                <a href={`/${lan}/about`}>
                    <li className="hover:text-blue-primary transition-all duration-300">{text[lan].about}</li>
                </a>
            </ul>
            <div className=" ml-10">
                <LanguagePicker lan={lan} />
            </div>
        </nav>
    );
}