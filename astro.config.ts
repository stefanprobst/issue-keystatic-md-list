import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
	integrations: [keystatic(), react(), mdx()],
	output: "hybrid",
	server: {
		port: 3000,
	},
});
