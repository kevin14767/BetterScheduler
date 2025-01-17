// app/(auth)/signup/employer/page.tsx
'use client'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { z } from "zod"

// Define validation schema
const signupSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(50, "Username must be less than 50 characters"),
    email: z.string()
        .email("Please enter a valid email address"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
})

type SignupForm = z.infer<typeof signupSchema>

export default function EmployerSignupPage() {
    const router = useRouter()
    
    const [formData, setFormData] = useState<SignupForm>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState<{[key: string]: string}>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setErrors({})

        try {
            // Validate form data
            const validatedData = signupSchema.parse(formData)
            
            // Here you would typically make an API call to your backend
            // For demonstration, we'll simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // If successful, redirect to login
            console.log('Form submitted:', validatedData)
            router.push('/login/employer')

        } catch (error) {
            if (error instanceof z.ZodError) {
                // Convert Zod errors into a more friendly format
                const formattedErrors: {[key: string]: string} = {}
                error.errors.forEach(err => {
                    if (err.path) {
                        formattedErrors[err.path[0]] = err.message
                    }
                })
                setErrors(formattedErrors)
            } else {
                setErrors({
                    form: 'An unexpected error occurred. Please try again.'
                })
            }
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h1 className="text-xl text-center font-medium mb-12">
                        Create Account
                    </h1>
                    
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-sm">
                                Username:
                            </label>
                            <Input 
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className={`rounded-full py-6 bg-[#f2e6d9] ${errors.username ? 'border-red-500' : ''}`}
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">
                                Email:
                            </label>
                            <Input 
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`rounded-full py-6 bg-[#f2e6d9] ${errors.email ? 'border-red-500' : ''}`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm">
                                Password:
                            </label>
                            <Input 
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`rounded-full py-6 bg-[#f2e6d9] ${errors.password ? 'border-red-500' : ''}`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="text-sm">
                                Confirm Password:
                            </label>
                            <Input 
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`rounded-full py-6 bg-[#f2e6d9] ${errors.confirmPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                        
                        {errors.form && (
                            <p className="text-red-500 text-sm text-center">{errors.form}</p>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-6 mt-4 text-black bg-[#f2e6d9] hover:bg-[#e6d0b8] rounded-full disabled:opacity-50"
                            variant="ghost"
                        >
                            {isSubmitting ? 'SIGNING UP...' : 'SIGN UP'}
                        </Button>

                        <div className="text-sm text-center">
                            Already have an account?{' '}
                            <button 
                                type="button"
                                onClick={() => router.push('/login/employer')}
                                className="text-blue-600 hover:underline"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}