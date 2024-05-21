export interface LoginForm {
    email: string;
    password: string;
}

interface UserRegisterInputs {
    name: string;
    email: string;
    password: string;
    phone: number;
    number_buses?: number;
    role: "owner" | "driver";
    avatarNumber: number;
    license?: number;
    id_owner?: string;
    age?: number;
    status: "active" | "inactive";
}

export type RegisterForm = UserRegisterInputs;
