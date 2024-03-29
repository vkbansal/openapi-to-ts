/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface InteractionsRemoveRestrictionsForOrgPathParams {
	org: string;
}

export interface InteractionsRemoveRestrictionsForOrgProps
	extends Omit<RequestInit, 'method' | 'body'>,
		InteractionsRemoveRestrictionsForOrgPathParams {}

/**
 * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
 */
export async function interactionsRemoveRestrictionsForOrg(
	props: InteractionsRemoveRestrictionsForOrgProps,
) {
	const { org, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/orgs/${org}/interaction-limits`,
		method: 'DELETE',
		...rest,
	});
}
