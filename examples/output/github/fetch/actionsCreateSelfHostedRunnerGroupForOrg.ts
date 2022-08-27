export interface ActionsCreateSelfHostedRunnerGroupForOrgPathParams {
	org: string;
}

export interface ActionsCreateSelfHostedRunnerGroupForOrgRequestBody {
	/**
	 * Name of the runner group.
	 */
	name: string;
	/**
	 * List of runner IDs to add to the runner group.
	 */
	runners?: number[];
	/**
	 * List of repository IDs that can access the runner group.
	 */
	selected_repository_ids?: number[];
	/**
	 * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories. Can be one of: `all`, `selected`, or `private`.
	 * @default "all"
	 */
	visibility?: 'all' | 'private' | 'selected';
}

export interface ActionsCreateSelfHostedRunnerGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsCreateSelfHostedRunnerGroupForOrgPathParams {
	body: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
}

export async function actionsCreateSelfHostedRunnerGroupForOrg(
	props: ActionsCreateSelfHostedRunnerGroupForOrgProps,
) {
	const { org, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups`, {
		method: 'POST',
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
