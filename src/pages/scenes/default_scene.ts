import { UrlManager } from "src/components/UrlManager";
import { DropdownManager } from "src/components/DropdownManager";

const urlManager = new UrlManager();
const dropdownManager = new DropdownManager(urlManager);

$(document).on("knack-page-render.any", function (page, records, view, data) {
	const nyResourcesTargetPageURL =
		"https://drive.google.com/drive/folders/1uGgUkYLI31GQ3Ga8T8ni_Cn71vZTlEVd";
	// to add more links just find the href in the inspects and call this method again with the new link
	urlManager.createExternalLink(nyResourcesTargetPageURL, "#ny-resources");

	const dropDownToUrlMap = new Map<string, string>();
	dropDownToUrlMap.set(
		"LISNDA Group Docs",
		"https://drive.google.com/drive/folders/1HeLwhf4XbfAQu5z3cnXfoVtDbstbWT0z"
	);
	dropDownToUrlMap.set(
		"LISNDA Recipe Sharing Folder",
		"https://drive.google.com/drive/folders/14Qs0wdZs_AgqRn1oryT1pEOuvXXJq352"
	);

	dropDownToUrlMap.forEach((v, k) => {
		dropdownManager.createDropdownItem({
			url: v,
			siblingHref: "#ny-resources",
			text: k,
		});
	});
});