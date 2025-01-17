//(dashboard layout with navigation)
// app/(dashboard)/employer/layout.tsx
'use client'
import { Sidebar } from "@/components/dashboard/side-bar"
import { Navbar } from "@/components/dashboard/nav-bar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
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