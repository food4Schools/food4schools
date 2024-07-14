export class UrlManagement {
    createExternalLink(url, href) {
        const node = document.querySelectorAll(`a[href='${href}']`);
        if (node.length > 0) {
			const el = node[0];
            (el as any).onclick = function (e) {
                e.preventDefault(); // prevent the knack click
                e.stopPropagation(); // Prevent the click event from bubbling up
                window.open(url, '_blank');
            };
        }
    }
}