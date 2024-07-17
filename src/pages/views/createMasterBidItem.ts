/**
 *  - any
 */
$(document).on("knack-view-render.view_203", function (event, view, data) {
	$("#view_203 .kn-button").on("click", function (e) {
		e.preventDefault(); // Prevent the default form submission
		e.stopPropagation(); // Prevent the click event from bubbling up
		const request = {
			itemName: $(`input#field_171`).val(),
			bidName: $(`input#field_179_raw`).val(),
			projectionUnit: $(`input#field_405`).val(),
			bidUnit: $(`input#field_173`).val(),
			bidOrProjUnit: $(`input#field_174`).val(),
			bidSpecification: $(`input#field_175`).val(),
			divertedCommodities: $(`input#field_319`).val(),
			minProjection: $(`input#field_191`).val(),
			isActive: $(`input#field_180`).val(),
		};
		console.log({ data, event, name: $(`input#field_171`).val() });
		const url = `${process.env.BASE_URL}/api/v1/projections`;
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: null,
		})
			.then((response) => response.json())
			.catch((err) => err.json());
	});
});
