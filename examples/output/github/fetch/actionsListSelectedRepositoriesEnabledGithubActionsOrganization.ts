export interface ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	org: string;
}

export interface ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams {
	queryParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}

export async function actionsListSelectedRepositoriesEnabledGithubActionsOrganization(
	props: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationProps,
) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/permissions/repositories`, {
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
