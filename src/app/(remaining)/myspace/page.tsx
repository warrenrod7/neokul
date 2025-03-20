import { IoAdd } from "react-icons/io5";
import Link from "next/link";

export default function MySpace() {
  return (
    <div className="flex min-h-screen mt-4 p-5 gap-12">
      <div className="flex flex-wrap w-60 h-60 gap-x-9  max-w-7xl">
        <Link href="/createspace">
          <div className="w-60 h-60  rounded-2xl bg-white flex flex-col items-center justify-center gap-y-2 hover:bg-gray-100 shadow-md transition-all duration-300 p-4">
            <h1 className="text-2xl md:text-3xl">Create Space</h1>
            <IoAdd className="text-5xl md:text-6xl text-gray-700 group-hover:text-blue-500 transition-all duration-300" />
          </div>
        </Link>       
      </div>
      <div className="flex flex-wrap gap-x-9 w-60 h-60 max-w-7xl">
        <Link href="/groupchat">
          <div className="w-60 h-60  rounded-2xl bg-white flex flex-col items-center justify-center gap-y-2 hover:bg-gray-100 shadow-md transition-all duration-300 p-4">
            <h1 className="text-2xl md:text-3xl">Project 1</h1>
            
          </div>
        </Link>       
      </div>
      <div className="flex flex-wrap gap-x-9  w-60 h-60 max-w-7xl">
        <Link href="/groupchat">
          <div className="w-60 h-60  rounded-2xl bg-white flex flex-col items-center justify-center gap-y-2 hover:bg-gray-100 shadow-md transition-all duration-300 p-4">
            <h1 className="text-2xl md:text-3xl">Project 2</h1>
            
          </div>
        </Link>       
      </div>
    </div>
  );
}
