import { StateCookie } from "@/middleware";
import { type NextRequest } from "next/server";
import { privateRoutes, publicRoutes } from "../routes/routesList";
import type { DecodedJWT } from "@/interfaces";
import { decodeJWT } from "./jwt";
import { AuthService } from "@/services";

export const handlePrivateRouteAccess = async (
    state: StateCookie,
    request: NextRequest,
    pathname: string,
    nextResponse: any
) => {
    if (Object.keys(state).length === 0 && privateRoutes?.includes(pathname)) {
        return nextResponse.redirect(new URL("/login", request.url));
    }
};

export const handlePublicRouteAccess = async (
    state: StateCookie,
    request: NextRequest,
    pathname: string,
    nextResponse: any
) => {
    // validate if state cookie is not empty and the path is in publicRoutes
    if (state?.token && publicRoutes?.includes(pathname)) {
        const { payload }: DecodedJWT = decodeJWT(state.token);
        const authServ = new AuthService();

        try {
            const user = await authServ.getUserById(payload.id);
            if (user) {
                return nextResponse.redirect(new URL("/dashboard", request.url));
            }
        } catch (error) {
            return nextResponse.redirect(new URL("/login", request.url));
        }
    }
};
