export interface ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
	runner_id: number;
}

export interface ActionsRemoveSelfHostedRunnerFromGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsRemoveSelfHostedRunnerFromGroupForOrgPathParams {}

export async function actionsRemoveSelfHostedRunnerFromGroupForOrg(
	props: ActionsRemoveSelfHostedRunnerFromGroupForOrgProps,
) {
	const { org, runner_group_id, runner_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/runner-groups/${runner_group_id}/runners/${runner_id}`,
		{
			method: 'DELETE',
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
