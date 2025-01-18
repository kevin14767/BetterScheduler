// components/schedule/schedule-form.tsx
'use client'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { EmployeeSelect } from "./employee-select"

const scheduleSchema = z.object({
    title: z.string().min(1, "Title is required"),
    startDate: z.date(),
    endDate: z.date(),
    employees: z.array(z.string()).min(1, "Select at least one employee")
})

type ScheduleForm = z.infer<typeof scheduleSchema>

export function ScheduleForm() {
    const [date, setDate] = useState<{
        from: Date | undefined
        to: Date | undefined
    }>({
        from: undefined,
        to: undefined
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ScheduleForm>({
        resolver: zodResolver(scheduleSchema)
    })

    const onSubmit = async (data: ScheduleForm) => {
        // Handle schedule creation
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
                <div>
                    <label htmlFor="title" className="text-sm font-medium">
                        Schedule Title
                    </label>
                    <Input
                        id="title"
                        {...register("title")}
                        className="mt-1"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.title.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Date Range
                    </label>
                    <Calendar
                        mode="range"
                        selected={date}
                        onSelect={setDate}
                        className="mt-1"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium">
                        Select Employees
                    </label>
                    <EmployeeSelect />
                </div>
            </div>

            <Button type="submit">
                Create Schedule
            </Button>
        </form>
    )
}