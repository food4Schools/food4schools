export class ItemCountSelector {
	setDropdown() {
		let attempts = 0;
		const maxAttempts = 5;
		const interval = setInterval(function () {
			$(".kn-select select[name='limit']").each(function () {
				// Set the value to 1000
				$(this).val("1000");

				// Trigger the change event to apply the new selection
				$(this).trigger("change");
				clearInterval(interval);
			});
		}, 200);

		attempts++;

		if (attempts >= maxAttempts) {
			console.log("Max attempts reached. Stopping interval.");
			clearInterval(interval);
		}
	}
}
