import { FieldStep } from "..";

export const tripFields: FieldStep[] = [
    {
        label: "date start",
        name: "dateStart",
        type: "date",
        required: true,
        icon: "",
    },
    {
        label: "date end",
        name: "dateEnd",
        type: "date",
        required: true,
        icon: "",
    },
    {
        label: "cost",
        name: "cost",
        type: "number",
        required: true,
        icon: "",
    },
    {
        label: "route Id",
        name: "routeId",
        type: "select",
        required: true,
        icon: "",
    },
    {
        label: "vehicle Id",
        name: "vehicleId",
        type: "select",
        required: true,
        icon: "",
    },
    {
        label: "driver Id",
        name: "driverId",
        type: "select",
        required: true,
        icon: "",
    },
];
