import { UrlManager } from "src/components/UrlManager";
import { DropdownManager } from "src/components/DropdownManager";
import { ItemCountSelector } from "src/components/ItemCountSelector";

const urlManager = new UrlManager();
const dropdownManager = new DropdownManager(urlManager);
const itemCountSelector = new ItemCountSelector();

const dropDownToUrlMap = new Map<string, string>();
dropDownToUrlMap.set(
	"LISNDA Group Docs",
	"https://drive.google.com/drive/folders/1HeLwhf4XbfAQu5z3cnXfoVtDbstbWT0z"
);
dropDownToUrlMap.set(
	"LISNDA Recipe Sharing Folder",
	"https://drive.google.com/drive/folders/14Qs0wdZs_AgqRn1oryT1pEOuvXXJq352"
);

$(document).on("knack-page-render.any", function (page, records, view, data) {
	const nyResourcesTargetPageURL =
		"https://drive.google.com/drive/folders/1S1XcIYHBNczp4XeB7qLQHWbFiy6qsSDF";
	// to add more links just find the href in the inspects and call this method again with the new link
	urlManager.createExternalLink(nyResourcesTargetPageURL, "#ny-resources");

	dropdownManager.createDropdownItems({
		siblingHref: "#ny-resources",
		siblingData: Array.from(dropDownToUrlMap.entries()).map(([k, v]) => ({
			url: v,
			text: k,
		})),
	});
});
