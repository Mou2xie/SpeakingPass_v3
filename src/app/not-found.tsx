import Link from 'next/link';
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div className=' w-full h-[70vh] flex flex-col items-center justify-center'>
        <Image
            src="/404.svg"
            alt="404 Not Found"
            width={200}
            height={200}
            className=" mt-10 mb-5"
        />
      <h2 className=' text-2xl text-center font-semibold text-text-strong mb-10'>Sorry, We have moved to another page</h2>
      <Link className=' btn px-5 bg-blue-primary rounded-full text-white text-[1.2rem] font-bold border-0' href="/part2/Person">Take me there</Link>
    </div>
  )
}