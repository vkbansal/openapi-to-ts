export interface ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams {
	org: string;
	runner_group_id: number;
	repository_id: number;
}

export interface ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgPathParams {}

export async function actionsRemoveRepoAccessToSelfHostedRunnerGroupInOrg(
	props: ActionsRemoveRepoAccessToSelfHostedRunnerGroupInOrgProps,
) {
	const { org, runner_group_id, repository_id, ...rest } = props;

	const response = await fetch(
		`/orgs/${org}/actions/runner-groups/${runner_group_id}/repositories/${repository_id}`,
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
