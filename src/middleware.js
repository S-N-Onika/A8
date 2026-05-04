import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(req) {
    const session = getSessionCookie(req);

    const protectedRoutes = ["/dashboard", "/my-profile", "/details-page"];

    const isProtected = protectedRoutes.some(route =>
        req.nextUrl.pathname.startsWith(route)
    );

    if (isProtected && !session) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/my-profile/:path*", "/details-page/:path*"],
};