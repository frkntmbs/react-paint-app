import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
//Vite react-toolkit
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": `${__dirname}/src`,
		},
	},
});
