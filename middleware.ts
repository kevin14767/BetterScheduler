// middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                },
            },
        }
    )

    const { data: { session }, error } = await supabase.auth.getSession()

    // Protect dashboard routes
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
        // Check email verification
        if (!session.user.email_confirmed_at) {
          return NextResponse.redirect(new URL('/verify-email', request.url))
        }
        // Check user type for specific routes
        const userType = session.user.user_metadata.user_type
        if (request.nextUrl.pathname.startsWith('/dashboard/employer') && userType !== 'employer') {
            return NextResponse.redirect(new URL('/login/employer', request.url))
        }
        if (request.nextUrl.pathname.startsWith('/dashboard/employee') && userType !== 'employee') {
            return NextResponse.redirect(new URL('/login/employee', request.url))
        }
    }

    return response
}

export const config = {
    matcher: ['/dashboard/:path*'],
}