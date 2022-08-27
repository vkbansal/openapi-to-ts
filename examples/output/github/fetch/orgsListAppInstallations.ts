export interface OrgsListAppInstallationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface OrgsListAppInstallationsPathParams {
	org: string;
}

export interface OrgsListAppInstallationsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		OrgsListAppInstallationsPathParams {
	queryParams: OrgsListAppInstallationsQueryParams;
}

export async function orgsListAppInstallations(props: OrgsListAppInstallationsProps) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/installations`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
