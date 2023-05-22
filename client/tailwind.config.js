/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			gridTemplateColumns: {
				mdChat: "10rem minmax(35rem, auto) minmax(30rem, 1fr)",
			},
			gridTemplateRows: {
				mdChat: "minmax(5rem, auto) 1fr minmax(5rem, auto)",
				mobileChat: "minmax(20rem, 1fr), 1fr minmax(5rem, auto)",
			},
		},
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
