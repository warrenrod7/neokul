import { IoAdd } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex px-8 pt-8 flex-row space-x-12">
        <Link href='/createspace'>
        <div className=" w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
            <h1 className="flex justify-center text-3xl mt-14 ">Create Space</h1>
            <div className="flex justify-center">
            <IoAdd className="text-6xl"></IoAdd>
            </div>
        </div>
        </Link>
        
    </div>
  );
}
