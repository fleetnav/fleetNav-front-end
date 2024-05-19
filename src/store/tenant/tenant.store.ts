import { create } from "zustand";

interface State {
    createTenant: () => void;
}

export const useUiStore = create<State>()((set) => ({
    createTenant: () => {},
}));
