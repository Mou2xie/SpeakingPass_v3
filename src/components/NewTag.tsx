import { CURRENT_MONTH } from "@/models/currentMonth";

export const NewTag = () => {
    return (
        <div className=" block mt-1 lg:inline lg:ml-3">
            <span className=" border border-red-500 text-red-500 px-1 py-[2px] rounded-[5px] text-[0.9rem] font-sans">{CURRENT_MONTH}</span>
        </div>
    );
}