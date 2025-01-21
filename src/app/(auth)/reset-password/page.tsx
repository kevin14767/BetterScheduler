'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from "@/src/utils/supabase/client"

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage('')
        setError('')

        const supabase = createClient()

        try {
            const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/update-password`,
            })

            if (resetError) throw resetError

            setMessage('Check your email for the password reset link')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <form onSubmit={handleResetPassword} className="space-y-6">
                    <h1 className="text-xl text-center font-medium mb-12">
                        Reset Password
                    </h1>

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

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm">
                            Email:
                        </label>
                        <Input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-full py-6"
                            disabled={isLoading}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-6"
                    >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </Button>
                </form>
            </div>
        </div>
    )
}