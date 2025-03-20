'use server'

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function resetPassword(email: string) {
  try {
    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/reset/update-password`
    console.log("Reset URL: ", redirectTo) // Debugging log

    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo })

    if (error) throw error

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send reset email' }
  }
}
