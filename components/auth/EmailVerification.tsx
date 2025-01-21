'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/src/utils/supabase/client'
import { Button } from '@/components/ui/button'

export function EmailVerification({ email }: { email: string }) {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleResendVerification = async () => {
        setIsLoading(true)
        setMessage('')
        setError('')

        try {
            const supabase = createClient()
            const { error: resendError } = await supabase.auth.resend({
                type: 'signup',
                email,
            })

            if (resendError) throw resendError
            setMessage('Verification email resent. Please check your inbox.')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to resend verification email')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="text-center space-y-4">
            <h2 className="text-lg font-medium">Verify Your Email</h2>
            <p>Please check your email to verify your account.</p>
            
            {message && (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm">
                    {message}
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                    {error}
                </div>
            )}

            <Button
                onClick={handleResendVerification}
                disabled={isLoading}
                variant="outline"
                className="mt-4"
            >
                {isLoading ? 'Sending...' : 'Resend verification email'}
            </Button>
        </div>
    )
}