/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ActionsListSelfHostedRunnersForOrgQueryParams {
	per_page?: number;
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
	});

	const json = await response.json();

	return json;
}
