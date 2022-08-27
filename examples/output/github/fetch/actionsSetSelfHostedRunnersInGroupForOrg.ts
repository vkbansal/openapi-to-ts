export interface ActionsSetSelfHostedRunnersInGroupForOrgPathParams {
	org: string;
	runner_group_id: number;
}

export interface ActionsSetSelfHostedRunnersInGroupForOrgRequestBody {
	/**
	 * List of runner IDs to add to the runner group.
	 */
	runners: number[];
}

export interface ActionsSetSelfHostedRunnersInGroupForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsSetSelfHostedRunnersInGroupForOrgPathParams {
	body: ActionsSetSelfHostedRunnersInGroupForOrgRequestBody;
}

export async function actionsSetSelfHostedRunnersInGroupForOrg(
	props: ActionsSetSelfHostedRunnersInGroupForOrgProps,
) {
	const { org, runner_group_id, body, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runner-groups/${runner_group_id}/runners`, {
		method: 'PUT',
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
