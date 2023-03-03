/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			playfair: ["Playfair Display", "cursive"],
		},
		extend: {
			colors: {
				primary: "#F2EFEB",
				secondary: "#402C28",
				tertiary: "#37403E",
				fourth: "#8C5845",
				fifth: "#038C8C",
			},
		},
	},
	plugins: [],
};
