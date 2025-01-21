// app/(auth)/signup/employer/page.tsx
'use client'
import { SignupForm } from '@/components/auth/SignupForm'
export default function EmployerSignupPage() {
    return (
        <SignupForm 
            userType="employer"
            title="Employer SIGNUP"
            loginPath="/login/employer"
        />
    )
}