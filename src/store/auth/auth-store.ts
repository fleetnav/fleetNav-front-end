import { RegisterForm } from "@/interfaces";
import { AuthService } from "@/services";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface State {
    user: Object | undefined;
    token: string | undefined;
    setUser: () => void;

    login: (email: string, password: string) => void;
    signUp: (formdata: RegisterForm) => void;
    logOut: () => void;
}

const store: StateCreator<State> = (get, set) => ({
    user: undefined,
    token: undefined,

    setUser: () => {},
    login: (email: string, password: string) => {},
    signUp: async (formdata: RegisterForm) => {
        const authService = new AuthService();

        const { data, status } = await authService.registerUser(formdata);

        set({ user: data });
    },
    logOut: () => {},
});

export const useAuthStore = create<State>()(
    devtools(
        persist(store, {
            name: "auth-store",
        })
    )
);
