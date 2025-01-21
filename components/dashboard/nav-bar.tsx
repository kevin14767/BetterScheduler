// components/dashboard/nav-bar.tsx
import { LogoutButton } from "@/components/auth/LogoutButton"

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold">Schedule Manager</span>
          </div>
          <div className="flex items-right gap-4">
                    {/* Add any other navbar items here */}
                    <LogoutButton />
          </div>

        </div>
      </div>
    </nav>
  )
}