import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { StateStorage, createJSONStorage } from "zustand/middleware";

const storeApi: StateStorage = {
    getItem: function (name: string): string | Promise<string | null> | null {
        const data = getCookie(name);
        if (data) {
            return data;
        }
        return null;
    },
    setItem: function (name: string, value: string): void {
        setCookie(name, value);
    },
    removeItem: function (name: string): void {
        deleteCookie(name);
    },
};

export const customCookiesStorage = createJSONStorage(() => storeApi);
