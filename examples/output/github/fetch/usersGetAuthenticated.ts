/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface UsersGetAuthenticatedProps extends Omit<RequestInit, 'method' | 'body'> {}

/**
 * If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
 *
 * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.
 */
export async function usersGetAuthenticated(props: UsersGetAuthenticatedProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/user`,
		method: 'GET',
		...rest,
	});
}
