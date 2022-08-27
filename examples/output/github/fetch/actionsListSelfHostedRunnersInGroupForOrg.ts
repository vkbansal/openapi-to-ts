export interface ActionsListSelfHostedRunnersInGroupForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListSelfHostedRunnersInGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsListSelfHostedRunnersInGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelfHostedRunnersInGroupForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnersInGroupForOrgQueryParams;
}

export async function actionsListSelfHostedRunnersInGroupForOrg(
	props: ActionsListSelfHostedRunnersInGroupForOrgProps,
) {
	const { org, runner_group_id, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups/${runner_group_id}/runners`, {
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
