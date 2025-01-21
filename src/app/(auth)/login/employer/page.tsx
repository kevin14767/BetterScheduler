'use client'
import { LoginForm } from '@/components/auth/LoginForm'

export default function EmployerLoginPage() {
    return (
        <LoginForm 
            userType="employer"
            title="Employer LOGIN"
            redirectPath="/employer"
            signupPath="/signup/employer"
        />
    )
}