import { IoAdd } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-12 px-8 pt-8">
      <Link href="/createspace">
        <div className="w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
          <h1 className="flex justify-center text-3xl mt-14">Create Space</h1>
          <div className="flex justify-center">
            <IoAdd className="text-6xl" />
          </div>
        </div>
      </Link>

      <Link href="/groupchat">
        <div className="w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
          <h1 className="flex justify-center text-3xl mt-14">Project 1</h1>
        </div>
      </Link>

      <div className="w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
        <h1 className="flex justify-center text-3xl mt-14">Project 2</h1>
      </div>

      <div className="w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
        <h1 className="flex justify-center text-3xl mt-14">Project 3</h1>
      </div>

      <div className="w-60 h-60 rounded-2xl bg-white flex flex-col space-y-3 hover:bg-gray-50 shadow-md">
        <h1 className="flex justify-center text-3xl mt-14">Project 4</h1>
      </div>
    </div>
  );
}
