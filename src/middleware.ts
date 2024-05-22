import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import type { DecodedJWT, User } from "./interfaces";
import { decodeJWT, privateRoutes, publicRoutes } from "./utils";
import { AuthService } from "./services";

export interface StateCookie {
    user: User;
    token: string;
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authCookie = request.cookies.get("auth-store")?.value;
    const isPrivateRoute = privateRoutes?.includes(pathname);
    const isPublicRoute = publicRoutes?.includes(pathname);

    const parsedCookie: { state: StateCookie } = JSON.parse(authCookie ?? "{}");

    if (parsedCookie) {
        if (Object.keys(parsedCookie)?.length === 0 && isPrivateRoute) {
            return NextResponse.redirect(new URL("/login", request.url));
        } else if (Object.keys(parsedCookie?.state ?? "{}")?.length === 0 && isPrivateRoute) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (parsedCookie?.state?.token && isPrivateRoute) {
        const { payload }: DecodedJWT = decodeJWT(parsedCookie.state.token);

        const authServ = new AuthService();
        const { status } = await authServ.getUserById(payload.id, payload.role);

        if (status === 200 && isPrivateRoute) {
            return;
        }
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (parsedCookie?.state?.token && isPublicRoute) {
        console.log("hola public");
        const { payload }: DecodedJWT = decodeJWT(parsedCookie?.state.token);

        const authServ = new AuthService();
        const { status } = await authServ.getUserById(payload.id, payload.role);

        if (status === 404) {
            return;
        }
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)", "/api/:path*"],
};
