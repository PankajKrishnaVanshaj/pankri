import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Get pathname
  const { pathname } = req.nextUrl;

  // Try to get the JWT token
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // 1) Always allow next-auth API routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 2) If token exists, allow access
  if (token) {
    return NextResponse.next();
  }

  // 3) If no token and trying to access protected route → redirect
  if (pathname.startsWith("/dashboard")) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/";
    return NextResponse.redirect(loginUrl);
  }

  // Default allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // only apply to dashboard routes
};
