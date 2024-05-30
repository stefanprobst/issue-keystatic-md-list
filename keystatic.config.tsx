import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: { kind: "local" },
	collections: {
		pages: collection({
			label: "Pages",
			path: "src/content/pages/*",
			slugField: "title",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({
					name: {
						label: "Title",
					},
				}),
				content: fields.mdx({
					label: "Content",
				}),
			},
		}),
	},
});
