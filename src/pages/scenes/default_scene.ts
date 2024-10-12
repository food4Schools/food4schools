import { UrlManager } from "src/components/UrlManager";
import { DropdownManager } from "src/components/DropdownManager";

const urlManager = new UrlManager();
const dropdownManager = new DropdownManager(urlManager);

interface View {
	key: string;
	type: string;
	'results_type': string;
}
interface TableView extends View {
	'rows_per_page': number;
}

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
		siblingData: Array.from(dropDownToUrlMap.entries()).map(([k, v]) => ({ url: v, text: k })),
	});


	// Use setInterval to continuously check if the select[name="limit"] element exists
	console.log({page, records, view, data})
	const tableViews = (records.views as View[]).filter((v) => v.type === 'table' || v.results_type === 'table');
	const searchTableViews = (records.views as View[]).filter((v) => v.results_type === 'table');
	const nonTableViews =(records.views as View[]).filter((v) => v.type !== 'table');
	// If the select element exists, set the value and stop the interval
	if (tableViews.length > 0) {
		const newTableViews = tableViews.map((tv) => ({...tv, 'rows_per_page': 1000}));
		const newSearchTableViews = searchTableViews.map((tv) => ({...tv, 'rows_per_page': '1000'}));
		records.views = nonTableViews.concat([...newTableViews,...newSearchTableViews]);
	}
	console.log({page, records, view, data})
});



