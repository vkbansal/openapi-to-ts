export interface AppsListInstallationReposForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface AppsListInstallationReposForAuthenticatedUserPathParams {
	installation_id: number;
}

export interface AppsListInstallationReposForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		AppsListInstallationReposForAuthenticatedUserPathParams {
	queryParams: AppsListInstallationReposForAuthenticatedUserQueryParams;
}

export async function appsListInstallationReposForAuthenticatedUser(
	props: AppsListInstallationReposForAuthenticatedUserProps,
) {
	const { installation_id, queryParams, ...rest } = props;

	const response = await fetch(`/user/installations/${installation_id}/repositories`, {
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
