import { UrlManager } from "src/components/UrlManager";

const urlManager = new UrlManager();

$(document).on("knack-page-render.any", function (page, records, view, data) {
	urlManager.createExternalLink(
		"https://drive.google.com/drive/folders/1S1XcIYHBNczp4XeB7qLQHWbFiy6qsSDF",
		"#ny-resources"
	);
	urlManager.createExternalLink(
		"https://drive.google.com/drive/folders/1HeLwhf4XbfAQu5z3cnXfoVtDbstbWT0z",
		"#lisnda-group-docs"
	);
	urlManager.createExternalLink(
		"https://drive.google.com/drive/folders/14Qs0wdZs_AgqRn1oryT1pEOuvXXJq352",
		"#lisnda-recipe-sharing-folder"
	);
});
