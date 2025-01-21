// components/auth/LogoutButton.tsx
'use client'

import { Button } from "@/components/ui/button"
import { createClient } from "@/src/utils/supabase/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function LogoutButton() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async () => {
        setIsLoading(true)
        const supabase = createClient()
        
        try {
            await supabase.auth.signOut()
            router.push('/')
            router.refresh()
        } catch (error) {
            console.error('Error logging out:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button 
            onClick={handleLogout}
            disabled={isLoading}
            variant="ghost"
            className="text-black hover:text-red-700"
        >
            {isLoading ? 'Logging out...' : 'Logout'}
        </Button>
    )
}