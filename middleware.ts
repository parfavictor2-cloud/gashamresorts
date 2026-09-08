import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session');
  const { pathname } = request.url ? new URL(request.url) : { pathname: request.nextUrl.pathname };

  // If trying to access admin pages (except login) without a session, redirect to login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If already logged in and trying to hit the login page, bounce to dashboard
  if (pathname === '/admin/login' && session && session.value === 'authenticated') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};