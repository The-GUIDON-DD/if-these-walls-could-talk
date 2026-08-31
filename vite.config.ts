import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		tailwindcss(),
		reactRouter(),
		cloudflare({
			viteEnvironment: {},
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
	ssr: {
		external: ["@amcharts/amcharts4"],
	},
	build: {
		rolldownOptions: {
			// Tells Rollup to treat these heavy export files as external so it skips resolving them
			external: [
				/@amcharts\/amcharts4\/.*\/bundled\/xlsx/,
				/@amcharts\/amcharts4\/.*\/bundled\/pdfmake/,
				/@amcharts\/amcharts4\/.*\/bundled\/canvg/,
			],
		},
	},
});
