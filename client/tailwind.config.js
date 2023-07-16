/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                hind: ['Hind Siliguri', 'sans-serif'],
            },
            colors: {
                primary: '#FE9F43',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
