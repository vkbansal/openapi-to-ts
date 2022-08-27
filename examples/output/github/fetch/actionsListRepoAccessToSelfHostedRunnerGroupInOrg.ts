export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsListRepoAccessToSelfHostedRunnerGroupInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	queryParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}

export async function actionsListRepoAccessToSelfHostedRunnerGroupInOrg(
	props: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgProps,
) {
	const { org, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/runner-groups/${runner_group_id}/repositories`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
