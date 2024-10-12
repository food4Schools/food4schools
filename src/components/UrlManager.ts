export class UrlManager {
    createExternalLink(url: string, href: String) {
        var checkForNode = setInterval(function() {
            const node = document.querySelectorAll(`a[href='${href}']`);
            if (node.length > 0) {
                clearInterval(checkForNode);  // Stop checking once the element is found
                const el = node[0];
                (el as HTMLAnchorElement).onclick = function (e) {
                    e.preventDefault(); // prevent the knack click
                    e.stopPropagation(); // Prevent the click event from bubbling up
                    window.open(url, '_blank');
                };
            }
        }, 100);
    }

    createExternalLinkWithNode(url: string, node: HTMLElement) {
        node.onclick = function (e) {
            e.preventDefault(); // prevent the knack click
            e.stopPropagation(); // Prevent the click event from bubbling up
            window.open(url, '_blank');
        };
    }
}