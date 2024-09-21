import { UrlManager } from "./UrlManager";

export interface CreateDropdownItemParams {
	siblingHref: string;
	siblingData: {
		url: string;
		text: string
	}[]
}

export class DropdownManager {
	private addedItemHeaders: String[] = [];
	constructor(private readonly urlManager: UrlManager) {}

	createDropdownItems({siblingHref, siblingData} : CreateDropdownItemParams) {
		const siblingNode = document.querySelectorAll(`a[href='${siblingHref}']`);
		for (const {url, text} of siblingData) {
		if (!this.addedItemHeaders.includes(text)) {
			if (siblingNode?.length >= 1) {
				const dropdownMenu = siblingNode[0].parentNode.parentNode;
				const item = document.createElement(
					"a.knHeader__menu-link.knHeader__menu-dropdown-link"
				);
				item.className = "knHeader__menu-link knHeader__menu-dropdown-link";
				item.textContent = `\n\n          ${text}\n\n          `;
				item.textContent = text;
				item.innerHTML = `<!---->\n\n          ${text}\n\n          <!---->`;
				item.innerText = text;
				item.textContent = text;
				this.urlManager.createExternalLinkWithNode(url, item);
				dropdownMenu.appendChild(item);
				this.addedItemHeaders.push(text);
			} else {
				console.warn(`No elements found for href: ${siblingHref}`);
			}
		}
	}
	}
}
