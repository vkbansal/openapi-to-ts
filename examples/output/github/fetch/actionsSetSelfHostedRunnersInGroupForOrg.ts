/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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

/**
 * The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 *
 * Replaces the list of self-hosted runners that are part of an organization runner group.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */
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
