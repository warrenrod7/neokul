'use client'
import { createClient } from '@/utils/supabase/client'

interface Props {
  mode?: 'signin' | 'signup'
}

export default function GoogleLogin({ mode = 'signin' }: Props) {
  const supabase = createClient()

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account'
        }
      }
    })

    if (error) {
      console.error('Error with Google auth:', error.message)
    }
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