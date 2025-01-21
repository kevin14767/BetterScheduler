// app/(dashboard)/employer/layout.tsx
'use client'
import { Sidebar } from "@/components/dashboard/side-bar"
import { Navbar } from "@/components/dashboard/nav-bar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/src/utils/supabase/client"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()
    
    // Check authentication and user type on mount
    useEffect(() => {
        const checkAuth = async () => {
            const supabase = createClient()
            const { data: { session } } = await supabase.auth.getSession()
            
            // If no session, redirect to login
            if (!session) {
                router.push('/login/employer')
                return
            }
            
            // If wrong user type, redirect
            if (session.user.user_metadata.user_type !== 'employer') {
                router.push('/login/employer')
                return
            }
            
            // If email not verified (optional)
            if (!session.user.email_confirmed_at) {
                router.push('/verify-email')
                return
            }
        }
        
        checkAuth()
    }, [router])

    return (
        <div className="h-screen flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}