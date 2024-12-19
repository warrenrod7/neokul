"use client";

import React from "react";
import Link from "next/link";
import { FaInbox, FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAdd, MdOutlineLogout } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";

const SideNavBar: React.FC = () => {
  return (
    <div className="p-5 pt-3 w-1/2 h-screen bg-white z-20 fixed lg:w-60 flex flex-col">
      
      <div className="">
        <Image src="/logo.png" width={150} height={50} alt="Logo" />
      </div>

      
      <div className="flex-grow mt-6 my-4 pb-4">
        <Link href="/profile">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <IoPerson className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">Profile</h3>
          </div>
        </Link>

        <Link href="/home">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <FaHome className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800 font-semibold">Home</h3>
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
        <div className="mb-12"></div>
        <div className="border-b border-gray-300"></div>
        <div className="my-3">
        <h1 className="font-bold mb-3 text-black">My Space</h1>
        <Link href="/create-space">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <MdAdd className="text-2xl text-gray-600 " />
            <h3 className="text-base text-gray-800  font-semibold">Create Space</h3>
          </div>
        </Link>
      </div>
      </div>
      
      
      <div className="mt-auto">
        <Link href="/logout">
          <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-red-500 p-2 rounded-md group cursor-pointer hover:shadow-lg">
            <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Logout</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavBar;
