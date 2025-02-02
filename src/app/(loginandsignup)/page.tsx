"use client";

import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to our platform!</h1>
       
        
        <button
          onClick={() => router.push("/login")}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition mb-4"
        >
          Sign In
        </button>

        <button
          onClick={() => router.push("/signup")}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
