// components/dashboard/side-bar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
    Calendar, 
    Users, 
    Settings,
    LayoutDashboard 
} from 'lucide-react'

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/employer',
    },
    {
        label: 'Schedule',
        icon: Calendar,
        href: '/employer/schedule',
    },
    {
        label: 'Employees',
        icon: Users,
        href: '/employer/employees',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/employer/settings',
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="h-full w-64 border-r bg-gray-100 p-4">
            <div className="space-y-4">
                <div className="mb-8">
                    <h1 className="text-xl font-bold">BetterScheduler</h1>
                </div>
                <nav className="space-y-2">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${
                                pathname === route.href ? 'bg-gray-200 text-gray-900' : ''
                            }`}
                        >
                            <route.icon className="h-5 w-5" />
                            {route.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}