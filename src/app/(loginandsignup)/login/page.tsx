import { login, signup } from './action'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <form className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="flex justify-center mb-8">
        <Image src="/logo.png" width={300} height={60} alt="Logo" />
      </div>
      
      <div className="bg-white p-8  w-full max-w-md">
        <div className="space-y-4">
          <div className="flex flex-col">
            <h1 className='text-3xl flex justify-center mb-6'>Login</h1>
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
          </div>

          <div className="flex flex-col space-y-3 mt-6">
            <button 
              formAction={login}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Log in
            </button>
            <div className="text-center">
              <a href="/signup" className="text-blue-600 hover:text-blue-800">
                Don't have an account? Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}