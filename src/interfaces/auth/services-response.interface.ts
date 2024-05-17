export interface RegisterResponse {
    name: string;
    email: string;
    password: string;
    phone: number;
    number_buses: number;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    number_buses: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
