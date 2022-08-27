export interface ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsDeleteSelfHostedRunnerGroupFromOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams {}

export async function actionsDeleteSelfHostedRunnerGroupFromOrg(
	props: ActionsDeleteSelfHostedRunnerGroupFromOrgProps,
) {
	const { org, runner_group_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups/${runner_group_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
