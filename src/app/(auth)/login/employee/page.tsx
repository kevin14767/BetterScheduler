// src/app/(auth)/login/employee/page.tsx
import { LoginForm } from '@/components/auth/LoginForm'

export default function EmployeeLoginPage() {
    return (
        <LoginForm 
            userType="employee"
            title="Employee LOGIN"
            redirectPath="/employee"
            signupPath="/signup/employee"
        />
    )
}