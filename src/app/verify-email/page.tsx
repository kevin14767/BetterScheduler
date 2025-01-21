// app/verify-email/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/src/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { EmailVerification } from '@/components/auth/EmailVerification'

export default function VerifyEmailPage() {
    const [email, setEmail] = useState<string | null>(null)
    const router = useRouter()
    
    useEffect(() => {
        const checkSession = async () => {
            const supabase = createClient()
            const { data: { session } } = await supabase.auth.getSession()
            
            if (!session) {
                router.push('/login')
                return
            }
            
            if (session.user.email_confirmed_at) {
                router.push('/dashboard')
                return
            }
            
            setEmail(session.user.email)
        }
        
        checkSession()
    }, [router])
    
    if (!email) return null
    
    return <EmailVerification email={email} />
}