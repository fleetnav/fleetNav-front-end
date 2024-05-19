interface Steps {
    id: string;
    name: string;
    fields: FieldStep[];
}

export interface FieldStep {
    label: string;
    name: string;
    icon: string;
    type: "text" | "number" | "email" | "password" | "select" | "file";
    required?: boolean;
}

export const STEPS: Steps[] = [
    {
        id: "1",
        name: "Routes",
        fields: [
            {
                label: "name",
                name: "name",
                type: "text",
                required: true,
                icon: "",
            },
            {
                label: "time",
                name: "averageTime",
                type: "number",
                required: true,
                icon: "",
            },
            {
                label: "origin",
                name: "origin",
                type: "text",
                required: true,
                icon: "",
            },
            {
                label: "destination",
                name: "destination",
                type: "text",
                required: true,
                icon: "",
            },
            {
                name: "mileage",
                type: "text",
                required: true,
                icon: "",
                label: "mileage",
            },
        ],
    },
    {
        id: "2",
        name: "Cost",
        fields: [
            {
                label: "number of Tolls",
                name: "numberToll",
                type: "number",
                required: true,
                icon: "",
            },
            {
                label: "price of Tolls",
                name: "priceToll",
                type: "number",
                required: true,
                icon: "",
            },
            {
                label: "price of gasoline",
                name: "priceGasoline",
                type: "number",
                required: true,
                icon: "",
            },
        ],
    },
    {
        id: "3",
        name: "Stops",
        fields: [
            {
                label: "name",
                name: "name",
                type: "text",
                required: true,
                icon: "",
            },
            {
                label: "location",
                name: "location",
                type: "text",
                required: true,
                icon: "",
            },
            {
                label: "time",
                name: "text",
                type: "number",
                required: true,
                icon: "",
            },
        ],
    },
];
