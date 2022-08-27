export interface ActionsAddSelfHostedRunnerToGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
	runner_id: number;
}

export interface ActionsAddSelfHostedRunnerToGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsAddSelfHostedRunnerToGroupForOrgPathParams {}

export async function actionsAddSelfHostedRunnerToGroupForOrg(
	props: ActionsAddSelfHostedRunnerToGroupForOrgProps,
) {
	const { org, runner_group_id, runner_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/runner-groups/${runner_group_id}/runners/${runner_id}`,
		{
			method: 'PUT',
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
