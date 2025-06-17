import Image from 'next/image';
import { FallbackPartOne } from '@/components/Fallback';

export default function Loading() {
    return (
        <>
            <section className=" flex justify-around items-center h-20 lg:h-30 mt-20 lg:mt-30">
                <div className=' skeleton w-100 h-30'></div>
                <div className=' skeleton w-50 h-30'></div>
            </section>
            <hr className=" text-[#DCE4EC] my-5 lg:my-8" />
            <FallbackPartOne length={30} />
        </>
    );
}