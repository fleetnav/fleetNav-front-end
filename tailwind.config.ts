import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            colors: {
                primary: "#fff",
                secondary: "#001329",
                fonts: "#fff",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                dark: {
                    colors: {
                        primary: {
                            DEFAULT: "#BEF264",
                            foreground: "#fff",
                        },

                        focus: "#BEF264",

                        secondary: { DEFAULT: "#000666", foreground: "#000" },
                    },
                },
            },
        }),
        addDynamicIconSelectors(),
    ],
};
export default config;
