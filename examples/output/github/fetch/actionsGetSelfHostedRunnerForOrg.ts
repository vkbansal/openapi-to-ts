export interface ActionsGetSelfHostedRunnerForOrgPathParams {
	org: string;
	runner_id: number;
}

export interface ActionsGetSelfHostedRunnerForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetSelfHostedRunnerForOrgPathParams {}

export async function actionsGetSelfHostedRunnerForOrg(
	props: ActionsGetSelfHostedRunnerForOrgProps,
) {
	const { org, runner_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners/${runner_id}`, {
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
