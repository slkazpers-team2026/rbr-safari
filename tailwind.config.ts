import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // --- මෙන්න මේ කෑල්ල එකතු කරන්න ---
            fontFamily: {
                sans: ['var(--font-poppins)'], // සාමාන්‍ය අකුරු වලට Poppins
                serif: ['var(--font-playfair)'], // Headings වලට Playfair
            },
            // ------------------------------------
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;