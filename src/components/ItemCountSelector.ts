export class ItemCountSelector {
	setDropdown(numItems: number) {
		let attempts = 0;
		const maxAttempts = 5;
		const interval = setInterval(function () {
			$(".kn-select select[name='limit']").each(function () {
				$(this).val(numItems.toString());

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
