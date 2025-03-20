"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { FaInbox} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";
import { HiMiniUserGroup } from "react-icons/hi2";


const SideNavBar: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Logout Error:", error.message);
      } else {
        router.push("/login"); // Redirect after logout
      }
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 pt-3 w-64 h-screen bg-white z-20 fixed lg:w-60 flex flex-col shadow-xl">
      
      <div className="">
        <Image src="/logo.png" width={190} height={50} alt="Logo" />
      </div>

      <div className="flex-grow mt-6 my-4 pb-4">
        <Link href="/profile">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <IoPerson className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">Profile</h3>
          </div>
        </Link>

        <Link href="/myspace">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <HiMiniUserGroup className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">My Space</h3>
          </div>
        </Link>

        <Link href="/inbox">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <FaInbox className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">Inbox</h3>
          </div>
        </Link>

        <Link href="/notification">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <IoMdNotifications className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">Notification</h3>
          </div>
        </Link>

        
      </div>

      {/* Logout Button */}
      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="flex w-full justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg"
          disabled={loading}
        >
          <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
          <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
            {loading ? "Logging out..." : "Logout"}
          </h3>
        </button>
      </div>
    </div>
  );
};

export default SideNavBar;
