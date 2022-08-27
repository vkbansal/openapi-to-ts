export interface ActionsDeleteSelfHostedRunnerFromOrgPathParams {
	org: string;
	runner_id: number;
}

export interface ActionsDeleteSelfHostedRunnerFromOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsDeleteSelfHostedRunnerFromOrgPathParams {}

export async function actionsDeleteSelfHostedRunnerFromOrg(
	props: ActionsDeleteSelfHostedRunnerFromOrgProps,
) {
	const { org, runner_id, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners/${runner_id}`, {
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
