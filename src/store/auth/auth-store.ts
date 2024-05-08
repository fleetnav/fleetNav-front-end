import { RegisterForm } from "@/interfaces";
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface State {
    user: Object | undefined;
    setUser: () => void;

    login: (email: string, password: string) => void;
    signUp: (formdata: RegisterForm) => void;
    logOut: () => void;
}

const store: StateCreator<State> = (get, set) => ({
    user: undefined,

    setUser: () => {},

    login: (email: string, password: string) => {},
    signUp: (formdata: RegisterForm) => {},
    logOut: () => {},
});

export const useAuthStore = create<State>()(
    devtools(
        persist(store, {
            name: "auth-store",
        })
    )
);
