interface UserRegister {
    name: string;
    email: string;
    password: string;
    phone: string;
}

interface DriverRegisterInputs extends UserRegister {
    driverLicense: string;
    referredLink: string;
    age: number;
}

export type RegisterForm = UserRegister | DriverRegisterInputs;
