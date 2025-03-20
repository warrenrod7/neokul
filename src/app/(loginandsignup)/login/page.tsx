import { login, signup } from './action'
import Image from 'next/image'
import { supabase } from '@/utils/supabase/client'
import GoogleLogin from '@/components/GoogleLogin'
import Link from 'next/link'

export default function LoginPage() {
  
  
  return (
    <form className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="flex justify-center mb-8">
        <Image src="/logo.png" width={300} height={60} alt="Logo" />
      </div>
      
      
      <div className="bg-white pt-8 pb-3  w-full max-w-md">
        <div className="space-y-4">
          <div className="flex flex-col">
            <h1 className='text-3xl flex justify-center mb-6'>Sign In</h1>
            
            
            
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              id="email"
              name="email" 
              type="email"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input 
              id="password"
              name="password"
              type="password" 
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <Link href='/reset'><p className='text-right hover:text-blue-500'>Forgot password?</p></Link>
          </div>
          

          <div className="flex flex-col space-y-3 mt-6">
            <button 
              formAction={login}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-200"
            >
              Log in
            </button>
            <div className="text-center">
              <a href="/signup" className="text-gray-600 hover:text-gray-800">
                Don't have an account? Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div className="w-full max-w-md">      
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm bg-white">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <GoogleLogin />
      </div>
    </form>
  )
}