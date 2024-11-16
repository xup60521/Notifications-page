/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                p_Red: "hsl(1, 90%, 64%)",
                p_Blue: "hsl(219, 85%, 26%)",
                n_Very_light_grayish_blue: "hsl(210, 60%, 98%)",
                n_Light_grayish_blue_1: "hsl(211, 68%, 94%)",
                n_Light_grayish_blue_2: "hsl(205, 33%, 90%)",
                n_Grayish_blue: "hsl(219, 14%, 63%)",
                n_Dark_grayish_blue: "hsl(219, 12%, 42%)",
                n_Very_dark_blue: "hsl(224, 21%, 14%)",
            },
            fontFamily: {
                plus_jakarta: ["Plus Jakarta Sans", "sans-serif"]
            }
        },
    },
    plugins: [],
}

