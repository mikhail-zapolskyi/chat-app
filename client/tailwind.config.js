/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {},
		colors: {
			primary: "#1e1e1e",
			secondary: "#262626",
			white: "#ffffff",
			online: "#53e04e",
			offline: "#f0971d",
			button: "linear-gradient(to right, #fff500 0%, #b42ba6 100%)",
			"button-hover": "#4cbb17",
			error: "#ff0000",
			chat: "#e5e5e5",
			"chat-active": "#eeeeee",
			delete: "#cc4646",
		},
	},
	plugins: [require("flowbite/plugin")],
};
