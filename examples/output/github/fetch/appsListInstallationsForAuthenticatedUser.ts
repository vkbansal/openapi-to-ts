export interface AppsListInstallationsForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListInstallationsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {
	queryParams: AppsListInstallationsForAuthenticatedUserQueryParams;
}

export async function appsListInstallationsForAuthenticatedUser(
	props: AppsListInstallationsForAuthenticatedUserProps,
) {
	const { queryParams, ...rest } = props;

	const response = await fetch(`/user/installations`, {
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
