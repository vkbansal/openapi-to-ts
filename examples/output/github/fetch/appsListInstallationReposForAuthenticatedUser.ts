/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface AppsListInstallationReposForAuthenticatedUserQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}