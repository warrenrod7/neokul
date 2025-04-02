'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

const ResetPasswordPage = () => {
  const supabase = createClient()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const code = searchParams?.get('code') // Use 'code' instead of 'token'
    if (!code) {
      setError('Invalid or expired reset link.')
    } else {
      setToken(code)
    }
  }, [searchParams])

  const handleResetPassword = async () => {
    setLoading(true)

    if (!token) {
      setError('Invalid or expired reset link.')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      alert('Password updated successfully! Redirecting to login...')
      router.push('/login')
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={handleResetPassword}
        disabled={loading}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        {loading ? 'Resetting...' : 'Reset Password'}
      </button>
    </div>
  )
}

export default ResetPasswordPage
