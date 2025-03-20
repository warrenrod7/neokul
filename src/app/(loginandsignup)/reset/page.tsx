'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabase/client'
import Link from 'next/link'
import { IoMdArrowBack } from "react-icons/io";
import Image from 'next/image';

export default function Reset() {
  const [message, setMessage] = useState<string>('')

  const handleReset = async (formData: FormData) => {
    const email = formData.get('email') as string
  
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email)
  
      setMessage(`Password reset link sent to ${email}, check your email`)
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    }
  }
  
  return (
    <div className="bg-white">
        <Image src="/logo.png" width={190} height={50} alt="Logo" />
      
    <div className="flex flex-col items-center mt-10 pt-14 min-h-screen bg-white">
        <Image src='/lock.png' width={190} height={50} alt='reset'className='mb-5'/>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-semibold text-center">Reset Password</h1>
        <p className='text-gray-500'>Forgot your Password? No problem, Enter the email address and we will send you the link!</p>
        
        <form action={handleReset} className="space-y-4">
          <div className="space-y-2">
            
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 border rounded-md"
              placeholder="Email Address"
            />
          </div>
          
          <button
            type="submit"
            className="w-full p-2 text-white bg-gray-500 rounded-lg hover:bg-gray-700"
          >
            Send Reset Link
          </button>
        </form>
        <div className=' h-10 flex justify-center'>
            <Link href='/login' className='flex space-x-1 '>
            <IoMdArrowBack className=' text-center text-2xl text-gray-500'/><p className='text-center text-gray-500'>Return to login screen</p>
            
            </Link>
        </div>
        
        {message && (
          <p className="mt-4 text-center text-sm">
            {message}
          </p>
        )}
      </div>
    </div>
    </div>
  )
}