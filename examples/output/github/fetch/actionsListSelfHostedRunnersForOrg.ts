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

export interface ActionsListSelfHostedRunnersForOrgPathParams {
	org: string;
}

export interface ActionsListSelfHostedRunnersForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsListSelfHostedRunnersForOrgPathParams {
	queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}

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
