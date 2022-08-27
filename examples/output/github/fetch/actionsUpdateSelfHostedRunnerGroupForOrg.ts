export interface ActionsUpdateSelfHostedRunnerGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody {
	/**
	 * Name of the runner group.
	 */
	name?: string;
	/**
	 * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories. Can be one of: `all`, `selected`, or `private`.
	 */
	visibility?: 'all' | 'private' | 'selected';
}

export interface ActionsUpdateSelfHostedRunnerGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsUpdateSelfHostedRunnerGroupForOrgPathParams {
	body: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
}

export async function actionsUpdateSelfHostedRunnerGroupForOrg(
	props: ActionsUpdateSelfHostedRunnerGroupForOrgProps,
) {
	const { org, runner_group_id, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups/${runner_group_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
