/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsListSelectedReposForOrgSecretQueryParams {
	page?: number;
	per_page?: number;
}

export interface ActionsListSelectedReposForOrgSecretPathParams {
	org: string;
	secret_name: string;
}

export interface ActionsListSelectedReposForOrgSecretProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelectedReposForOrgSecretPathParams {
	queryParams: ActionsListSelectedReposForOrgSecretQueryParams;
}

export async function actionsListSelectedReposForOrgSecret(
	props: ActionsListSelectedReposForOrgSecretProps,
) {
	const { org, secret_name, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/secrets/${secret_name}/repositories`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}