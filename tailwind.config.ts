import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { addDynamicIconSelectors } from "@iconify/tailwind";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",

        // Next UI
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                "no-header": "calc(100dvh - 64px)",
            },

            colors: {
                "primary-blue": "#002047",
                "secondary-blue": "#4067EC",
            },
        },
    },

    darkMode: "class",
    plugins: [
        nextui({
            prefix: "nextui",
            addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "dark", // default theme from the themes object
            defaultExtendTheme: "dark", // default theme to extend on custom themes
            layout: {}, // common layout tokens (applied to all themes)
            themes: {
                light: {
                    layout: {}, // light theme layout tokens
                    colors: {
                        // Override default light theme colors
                        primary: "#f8f8f8", // Example: Change primary color to a bright blue
                        secondary: "#19181d", // Example: Change accent color to a dark blue
                        foreground: "#121211", // Black text for readability
                        background: "#fff", // Light background
                    }, // light theme colors
                },
                dark: {
                    layout: {}, // dark theme layout tokens
                    colors: {
                        // Override default dark theme colors
                        primary: "#fff", // Example: Change primary color to a dark orange
                        secondary: "#030303", // Example: Change accent color to a purple
                        foreground: "#fefefe", // White text for readability
                        background: "#19181d", // Dark background
                    }, // dark theme colors
                },
                // ... custom themes
            },
        }),
        addDynamicIconSelectors(),
    ],
};
export default config;
