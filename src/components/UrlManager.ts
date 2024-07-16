export class UrlManager {
    createExternalLink(url: string, href: String) {
        const node = document.querySelectorAll(`a[href='${href}']`);
        if (node.length > 0) {
			const el = node[0];
            (el as HTMLAnchorElement).onclick = function (e) {
                e.preventDefault(); // prevent the knack click
                e.stopPropagation(); // Prevent the click event from bubbling up
                window.open(url, '_blank');
            };
        }
    }

    createExternalLinkWithNode(url: string, node: HTMLElement) {
        node.onclick = function (e) {
            e.preventDefault(); // prevent the knack click
            e.stopPropagation(); // Prevent the click event from bubbling up
            window.open(url, '_blank');
        };
    }
}