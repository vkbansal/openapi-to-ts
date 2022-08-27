export interface ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody {
	/**
	 * List of repository IDs that can access the runner group.
	 */
	selected_repository_ids: number[];
}

export interface ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	body: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
}

export async function actionsSetRepoAccessToSelfHostedRunnerGroupInOrg(
	props: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgProps,
) {
	const { org, runner_group_id, body, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/runner-groups/${runner_group_id}/repositories`,
		{
			method: 'PUT',
			body: JSON.stringify(body),
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
