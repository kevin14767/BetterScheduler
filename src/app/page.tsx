import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl w-full text-center space-y-8">
        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Schedule Smarter
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Effortlessly manage your team's schedule with our intuitive platform
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/login/employee">
            <Button variant="outline" size="lg">
              Employee Access
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Easy Scheduling</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage schedules with just a few clicks
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Team Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Coordinate your team's availability seamlessly
            </p>
          </div>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="font-semibold text-lg mb-2">Real-time Updates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay synchronized with instant schedule updates
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        <p>© 2024 Scheduler. All rights reserved.</p>
      </footer>
    </div>
  );
}