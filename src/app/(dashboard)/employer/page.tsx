//(main dashboard overview)
// src/app/(dashboard)/employer/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employer Dashboard',
  description: 'Manage your business schedules and employees',
}

export default function EmployerDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Schedule Management</h1>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              {/* Schedule Form Section */}
              <div className="mb-6">
                <h2 className="text-xl font-medium mb-4">Schedule 1</h2>
                <div className="space-y-4">
                  {/* Days of Week Grid */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="font-medium">Days</div>
                    <div className="font-medium">Business Hours</div>
                    <div className="font-medium">Employees Per Shift</div>
                    <div className="font-medium">All Day?</div>
                  </div>

                  {/* Example Day Row */}
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Sunday</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="time"
                        className="border rounded px-2 py-1"
                        placeholder="Open"
                      />
                      <span>to</span>
                      <input
                        type="time"
                        className="border rounded px-2 py-1"
                        placeholder="Close"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-20"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Schedule Button */}
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                GENERATE SCHEDULE
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}