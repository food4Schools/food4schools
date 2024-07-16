/**
 *  - any
 */
$(document).on("knack-view-render.view_203", function (event, scene) {
	const nodes = document.getElementsByClassName('kn-button is-primary');
		if (nodes.length > 0) {
			const submitButton = nodes[0];
			(submitButton as any).onclick = function (e) {
				const url = `https://lisnda-staging-1add8ba265e0.herokuapp.com/api/v1/projections`;
				console.log(url);
				fetch(url, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: null
				})
				.then(response => response.json())
				.catch(err => err.json());
			};
		}
});
