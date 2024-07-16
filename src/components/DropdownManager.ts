import { UrlManager } from "./UrlManager";

export interface CreateDropdownItemParams {
    url: string | URL;
    siblingHref: string;
    text: string;
}

export class DropdownManager {
    constructor(private readonly urlManager: UrlManager){}

	createDropdownItem({url, siblingHref, text}: CreateDropdownItemParams) {
        const siblingNode = document.querySelectorAll(siblingHref);
        if (siblingNode?.length >= 1) {
            const parentNode = siblingNode[0].parentElement;
            const item = document.createElement('a');
            item.href = '#';
            item.textContent = text;
            this.urlManager.createExternalLinkWithNode(url, item);
            parentNode.appendChild(item);
        }
    }
}