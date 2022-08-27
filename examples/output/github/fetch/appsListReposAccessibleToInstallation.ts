export interface AppsListReposAccessibleToInstallationQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListReposAccessibleToInstallationProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListReposAccessibleToInstallationQueryParams;
}

export async function appsListReposAccessibleToInstallation(
	props: AppsListReposAccessibleToInstallationProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/installation/repositories`, {
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
