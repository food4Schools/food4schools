export type Env = 'staging' | 'production';

export namespace StagingServer{
	export const baseUrl = 'https://lisnda-staging-1add8ba265e0.herokuapp.com';
}

export namespace ProductionServer{
	export const baseUrl = 'https://lisnda-453d0faf4382.herokuapp.com';
}

export function getUrlBase(): Env {
	const el = document.getElementsByClassName('knHeader__content')[0];
	if (el) {
		const baseUri = el.baseURI.split('#')[0].split('/')[3];
		return baseUri === 'lisnda' ? 'production' : 'staging';
	}
	return null;
}
