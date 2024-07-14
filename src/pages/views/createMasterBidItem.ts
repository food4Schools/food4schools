import { StagingServer } from "src/constants/server";

/**
 *  - any
 */
$(document).on("knack-view-render.view_203", function (event, scene) {
	const nodes = document.getElementsByClassName('kn-button is-primary');
		if (nodes.length > 0) {
			const submitButton = nodes[0];
			(submitButton as any).onclick = function (e) {
				fetch(`${StagingServer.baseUrl}/api/v1/projections`, {
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
