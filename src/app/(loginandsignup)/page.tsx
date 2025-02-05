"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="bg-white h-full ">
      <Image src="/logo.png" alt="neokul" width={230} height={60}/>
      <h1 className="text-6xl font-bold text-blue-700  text-center pt-10 ">Welcome to our platform!</h1>
      <div className="flex justify-center">
      <Image src="/platform.jpg" alt="welcome" height={100} width={900}/>
      </div>
    
    
      
      <div className="flex flex-row space-x-60  mt-10 justify-center">
       
        
       
        
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 rounded-3xl w-20 h-10 text-white h-12 w-40"
        >
          Login
        </button>

        <button
          onClick={() => router.push("/signup")}
          className="bg-blue-600 rounded-3xl w-20 h-10 text-white h-12 w-40"
        >
          Sign Up
        </button>
      </div>
      </div>
    
  );
}
