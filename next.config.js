/**
 * @type {import('next/config').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ["src", "lib"],
	},
	pageExtensions: ["page.tsx", "api.ts"],
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	}
}
module.exports = nextConfig
