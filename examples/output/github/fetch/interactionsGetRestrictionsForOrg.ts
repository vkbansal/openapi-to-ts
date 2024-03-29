/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface InteractionsGetRestrictionsForOrgPathParams {
	org: string;
}

export interface InteractionsGetRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsGetRestrictionsForOrgPathParams {}

/**
 * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
 */
export async function interactionsGetRestrictionsForOrg(
	props: InteractionsGetRestrictionsForOrgProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/interaction-limits`,
		method: 'GET',
		...rest,
	});
}
