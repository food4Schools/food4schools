import { getUrlBase, ProductionServer, StagingServer } from "src/constants/server";

/**
 *  - any
 */
$(document).on("knack-view-render.view_203", function (event, scene) {
	const nodes = document.getElementsByClassName('kn-button is-primary');
		if (nodes.length > 0) {
			const submitButton = nodes[0];
			const url = submitButton.getAttribute('data-url');
			(submitButton as any).onclick = function (e) {
				fetch(`${getUrlBase() === 'staging' ? StagingServer.baseUrl : ProductionServer.baseUrl}/api/v1/projections`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: null
				})
				.then(response => response.json());
			};
		}
});
