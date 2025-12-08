import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "0.0.0.0", // Pozwala na dostęp z innych urządzeń w sieci
		port: 5173, // Port domyślny Vite
		strictPort: false, // Jeśli port zajęty, znajdzie inny
	},
});
