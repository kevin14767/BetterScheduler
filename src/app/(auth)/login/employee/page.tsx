'use client'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const loginSchema = z.object({
    employerId: z.string().min(1, "Employer ID is required"),
})

type LoginForm = z.infer<typeof loginSchema>

export default function EmployeeLoginPage() {
    const router = useRouter()
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data: LoginForm) => {
        try {
            // Here you would make your API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log('Form submitted:', data)
            // router.push('/dashboard/employee')
        } catch (error) {
            console.error('Login error:', error)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <h1 className="text-xl text-center font-medium mb-12">
                        EMPLOYEE LOGIN
                    </h1>
                    
                    <div className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="employerId" className="text-sm">
                                Employer ID:
                            </label>
                            <Input 
                                {...register("employerId")}
                                className={`rounded-full py-6 bg-[#f2e6d9] ${errors.employerId ? 'border-red-500' : ''}`}
                            />
                            {errors.employerId && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.employerId.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-6 mt-4 text-black bg-[#f2e6d9] hover:bg-[#e6d0b8] rounded-full disabled:opacity-50"
                            variant="ghost"
                        >
                            {isSubmitting ? 'LOGGING IN...' : 'LOGIN'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}