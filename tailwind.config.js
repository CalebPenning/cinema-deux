module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/common/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"]
			}
		}
	},
	plugins: [require("@tailwindcss/forms")({
		strategy: "class"
	})]
}
