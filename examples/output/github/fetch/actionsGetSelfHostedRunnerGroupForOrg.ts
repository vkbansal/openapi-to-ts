export interface ActionsGetSelfHostedRunnerGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsGetSelfHostedRunnerGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetSelfHostedRunnerGroupForOrgPathParams {}

export async function actionsGetSelfHostedRunnerGroupForOrg(
	props: ActionsGetSelfHostedRunnerGroupForOrgProps,
) {
	const { org, runner_group_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups/${runner_group_id}`, {
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
