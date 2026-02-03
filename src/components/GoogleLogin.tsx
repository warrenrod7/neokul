'use client'
import { supabase } from '@/utils/supabase/client'
type Props = {
  mode?: 'signin' | 'signup'
}


export default function GoogleLogin({ mode = 'signin' }: Props) {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) console.error(error.message)
  }

  return (
    <button
      onClick={handleGoogleLogin}
      type="button"
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200"
    >
      <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
       Continue with Google
    </button>
  )
}
