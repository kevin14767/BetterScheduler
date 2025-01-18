//page.tsx (create new schedule)
// app/(dashboard)/employer/schedule/create/page.tsx
'use client'
import { ScheduleForm } from "@/components/schedule/schedule-form"

export default function CreateSchedulePage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Create New Schedule</h1>
            </div>
            <ScheduleForm />
        </div>
    )
}