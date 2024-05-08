interface UserRegisterInputs {
    name: string;
    email: string;
    password: string;
    phone: string;
}

interface DriverRegisterInputs extends UserRegisterInputs {
    driverLicense: string;
    referredLink: string;
    age: number;
}

export type RegisterForm = UserRegisterInputs | DriverRegisterInputs;
