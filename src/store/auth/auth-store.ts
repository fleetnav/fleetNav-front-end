import { RegisterForm, RegisterResponse, User } from "@/interfaces";
import { AuthService, TenantService } from "@/services";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { customCookiesStorage } from "../storages/cookies.storage";

interface State {
    user: User | undefined;
    token: string | undefined;

    login: (email: string, password: string) => Promise<{ status: number; error?: any; user: User | undefined }>;
    signUp: (formdata: RegisterForm, rol: "owner" | "driver") => Promise<{ data: RegisterResponse; status: number }>;
    logOut: () => void;
}

const store: StateCreator<State> = (set, get) => ({
    user: undefined,
    token: undefined,

    login: async (email: string, password: string) => {
        const authService = new AuthService();
        try {
            const { data, status } = await authService.loginUser(email, password);

            status === 201 && set({ user: data.user, token: data.token });
            return { status, error: undefined, user: data.user };
        } catch (error) {
            set({ user: undefined, token: undefined });
            return {
                status: 401,
                error,
                user: undefined,
            };
        }
    },
    signUp: async (formdata: RegisterForm, rol: "owner" | "driver") => {
        const authService = new AuthService();
        const tenantService = new TenantService();

        const { data, status } = await authService.registerUser(formdata);

        if (status === 201 && rol === "owner") {
            try {
                const res = await tenantService.createTenant(data.user._id, data.token);
            } catch (error) {
                throw new Error("Error creating tenant");
            }
        }

        status === 201 && set({ user: data.user, token: data.token });
        return { data, status };
    },
    logOut: () => set({ user: undefined, token: undefined }),
});

export const useAuthStore = create<State>()(
    devtools(
        persist(store, {
            name: "auth-store",
            storage: customCookiesStorage,
        })
    )
);
