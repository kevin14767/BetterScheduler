// app/(auth)/login/page.tsx
'use client'
import { useRouter } from "next/navigation"
import { Button } from '@/components/ui/button'

export default function MainLoginPage() {
    const router = useRouter()
    
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-[400px] p-8 border rounded-3xl shadow-sm">
                <div className="space-y-6 text-center">
                    <h1 className="text-xl font-medium mb-12">
                        LOGIN
                    </h1>
                    
                    <div className="flex flex-col space-y-4">
                        <Button
                            onClick={() => router.push('/login/employer')}
                            variant="custom"
                            className="w-full py-6"
                        >
                            EMPLOYER
                        </Button>
                        
                        <Button
                            onClick={() => router.push('/login/employee')}
                            variant="custom"
                            className="w-full py-6"
                        >
                            EMPLOYEE
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}