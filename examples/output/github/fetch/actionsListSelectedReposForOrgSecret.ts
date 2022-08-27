export interface ActionsListSelectedReposForOrgSecretQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
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
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
