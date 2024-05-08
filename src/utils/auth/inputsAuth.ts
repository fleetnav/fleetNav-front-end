interface InputsRegisterData {
    type: "text" | "email" | "password" | "number";
    name: "name" | "email" | "password" | "phone" | "driverLicense" | "referredLink" | "age";
    icon: string;
    label?: string;
    error?: string;
    patter?: RegExp;
}

interface InputsLoginData {
    type: "email" | "password";
    name: "email" | "password";
    icon: string;
    label?: string;
    error?: string;
    patter?: RegExp;
}

export const inputsLoginList: InputsLoginData[] = [
    {
        type: "email",
        name: "email",
        label: "email",
        icon: "icon-[mdi--email-outline]",
        error: "* Email is required",
    },
    {
        type: "password",
        name: "password",
        label: "password",
        icon: "icon-[mdi--lock-outline]",
        error: `* Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character`,
        patter: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    },
];

export const inputsRegisterList: InputsRegisterData[] = [
    {
        type: "text",
        name: "name",
        label: "name",
        icon: "icon-[solar--user-broken]",
        error: "* Name is required",
    },
    {
        type: "email",
        name: "email",
        label: "email",
        icon: "icon-[mdi--email-outline]",
        error: "* Email is required",
    },
    {
        type: "password",
        name: "password",
        label: "password",
        icon: "icon-[mdi--lock-outline]",
        error: `* Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character`,
        patter: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    },

    {
        type: "number",
        name: "phone",
        label: "phone number",
        icon: "icon-[clarity--phone-handset-line]",
        error: "* Phone number is required",
    },
    {
        type: "number",
        name: "driverLicense",
        label: "Driver License",
        icon: "icon-[fa--drivers-license-o]",
        error: `* Driver's license is required`,
    },
    {
        type: "text",
        name: "referredLink",
        label: "Referred Link",
        icon: "icon-[ph--link-simple]",
        error: `* Referral code is required`,
    },
    {
        type: "number",
        name: "age",
        label: "age",
        icon: "icon-[bi--calendar2-event]",
        error: `* Referral code is required`,
    },
];
