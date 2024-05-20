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
}

interface DriverRegisterInputs extends UserRegisterInputs {
    driverLicense: string;
    referredLink: string;
    age: number;
}

export type RegisterForm = UserRegisterInputs | DriverRegisterInputs;
