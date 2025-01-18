// app/(auth)/login/employee/page.tsx
'use client'
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function EmployerLoginPage() {
    const router = useRouter()
    
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <div className="space-y-6 text-center">
                    <h1 className="text-xl font-medium mb-12">
                        Employer LOGIN
                    </h1>
                    
                    <div className="flex flex-col space-y-4">
                        <Input 
                            placeholder="Email"
                            className="rounded-full py-6"
                        />
                        <Input 
                            type="password"
                            placeholder="Password"
                            className="rounded-full py-6"
                        />
                        
                        <Button
                            className="w-full py-6 text-black bg-[#f2e6d9] hover:bg-[#e6d0b8] rounded-full"
                            variant="ghost"
                            onClick={() => router.push('/employer')}
                        >
                            LOGIN
                        </Button>
                        
                        <div className="text-sm">
                            <span>Don't have an account? </span>
                            <button 
                                onClick={() => router.push('/signup/employer')}
                                className="text-blue-600 hover:underline"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}