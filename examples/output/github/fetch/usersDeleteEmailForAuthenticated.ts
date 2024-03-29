/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface UsersDeleteEmailForAuthenticatedProps
	extends Omit<RequestInit, 'method' | 'body'> {}

/**
 * This endpoint is accessible with the `user` scope.
 */
export async function usersDeleteEmailForAuthenticated(
	props: UsersDeleteEmailForAuthenticatedProps,
) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/user/emails`,
		method: 'DELETE',
		...rest,
	});
}
