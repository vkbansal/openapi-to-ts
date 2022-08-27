export interface ActionsListSelfHostedRunnerGroupsForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListSelfHostedRunnerGroupsForOrgPathParams {
	org: string;
}

export interface ActionsListSelfHostedRunnerGroupsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelfHostedRunnerGroupsForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}

export async function actionsListSelfHostedRunnerGroupsForOrg(
	props: ActionsListSelfHostedRunnerGroupsForOrgProps,
) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups`, {
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
