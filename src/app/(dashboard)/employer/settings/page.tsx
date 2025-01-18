//page.tsx (employer settings)
// src/app/(dashboard)/employer/settings/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings | Employer Dashboard',
  description: 'Manage your account and business settings',
}

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold">Settings</h1>
          </div>

          <div className="space-y-6">
            {/* Account Settings Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-6">Account Settings</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      defaultValue="@Username"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Employer ID
                    </label>
                    <input
                      type="text"
                      defaultValue="123256"
                      disabled
                      className="w-full border rounded-md px-3 py-2 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Security Settings Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-6">Security</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Business Settings Section */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-6">Business Settings</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full border rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select className="w-full border rounded-md px-3 py-2">
                      <option>Eastern Time (ET)</option>
                      <option>Pacific Time (PT)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 border rounded-md hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Save Changes
              </button>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-lg shadow border border-red-200">
              <div className="p-6">
                <h2 className="text-xl font-medium text-red-600 mb-4">
                  Danger Zone
                </h2>
                <p className="text-gray-600 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}