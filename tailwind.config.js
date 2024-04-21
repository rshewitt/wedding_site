/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            squiggly: ["var(--font-breezeblocks)"],
            normal: ["var(--font-monstserrat)"],
            normalBold: ["var(--font-monstserratBold)"],
            normalItalic: ["var(--font-monstserratItalic)"],
        },
        fontSize: {
            "md-twl": "0.85rem",
            "xl-wel": "1.1rem",
            "3xl-wel": "5rem",
            "5xl-wel": "7rem",
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
