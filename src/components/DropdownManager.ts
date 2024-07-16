import { UrlManager } from "./UrlManager";

export interface CreateDropdownItemParams {
    url: string;
    siblingHref: string;
    text: string;
}

export class DropdownManager {
    constructor(private readonly urlManager: UrlManager){}

	createDropdownItem({url, siblingHref, text}: CreateDropdownItemParams) {
        const siblingNode = document.querySelectorAll(`a[href='${siblingHref}']`);
        if (siblingNode?.length >= 1) {
            const dropdownMenu = siblingNode[0].parentNode.parentNode;
            const item = document.createElement('a.knHeader__menu-link.knHeader__menu-dropdown-link');
            item.className = 'knHeader__menu-link knHeader__menu-dropdown-link';
            item.textContent = `\n\n          ${text}\n\n          `;
            item.textContent = text;
            item.innerHTML = `<!---->\n\n          ${text}\n\n          <!---->`;
            item.innerText = text;
            item.textContent = text;
            this.urlManager.createExternalLinkWithNode(url, item);
            dropdownMenu.appendChild(item);
        }
    }
}