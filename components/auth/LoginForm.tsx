// components/auth/LoginForm.tsx
'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "../../src/utils/supabase/client"

interface LoginFormProps {
    userType: 'employee' | 'employer'
    title: string
    redirectPath: string
    signupPath: string
}

export function LoginForm({ userType, title, redirectPath, signupPath }: LoginFormProps) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        const supabase = createClient()

        try {
            // First sign in the user
            const { data: { user }, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
                
            })

            if (signInError) throw signInError

            // Then check if user type matches
            if (user?.user_metadata?.user_type !== userType) {
                throw new Error(`Invalid account type.`)
            }

            // If everything is okay, redirect
            router.push(redirectPath)
            router.refresh()

        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred during login')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h1 className="text-xl text-center font-medium mb-12">
                        {title}
                    </h1>

                    {error && (
                        <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">
                                Email:
                            </label>
                            <Input 
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-full py-6 bg-white"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">
                                Password:
                            </label>
                            <Input 
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-full py-6 bg-white"
                                disabled={isLoading}
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-6 text-black bg-[#f2e6d9] hover:bg-[#e6d0b8] rounded-full"
                            variant="ghost"
                        >
                            {isLoading ? 'LOGGING IN...' : 'LOGIN'}
                        </Button>

                        <div className="text-sm text-center space-y-2">
                            <div>
                                <button
                                    type="button"
                                    onClick={() => router.push('/reset-password')}
                                    className="text-blue-600 hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div>
                        </div>



                        <div className="text-sm text-center">
                            Don't have an account?{' '}
                            <button
                                type="button"
                                onClick={() => router.push(signupPath)}
                                className="text-blue-600 hover:underline"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}