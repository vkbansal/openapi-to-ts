export interface AppsListInstallationsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	since?: string;
	outdated?: string;
}

export interface AppsListInstallationsProps extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListInstallationsQueryParams;
}

export async function appsListInstallations(props: AppsListInstallationsProps) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/app/installations`, {
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
