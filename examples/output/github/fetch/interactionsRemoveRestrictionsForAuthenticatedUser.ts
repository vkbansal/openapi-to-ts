/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface InteractionsRemoveRestrictionsForAuthenticatedUserProps
	extends Omit<RequestInit, 'method' | 'body'> {}

/**
 * Removes any interaction restrictions from your public repositories.
 */
export async function interactionsRemoveRestrictionsForAuthenticatedUser(
	props: InteractionsRemoveRestrictionsForAuthenticatedUserProps,
) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/user/interaction-limits`,
		method: 'DELETE',
		...rest,
	});
}
