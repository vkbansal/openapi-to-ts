/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ActionsListSelfHostedRunnersForOrgPathParams {
	org: string;
}

export interface ActionsListSelfHostedRunnersForOrgQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ActionsListSelfHostedRunnersForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelfHostedRunnersForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}

/**
 * Lists all self-hosted runners configured in an organization.
 *
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 */
export async function actionsListSelfHostedRunnersForOrg(
	props: ActionsListSelfHostedRunnersForOrgProps,
) {
	const { org, queryParams, ...rest } = props;

	const response = await fetch(`/orgs/${org}/actions/runners`, {
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
