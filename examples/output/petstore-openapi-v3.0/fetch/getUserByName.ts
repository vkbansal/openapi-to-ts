/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface GetUserByNamePathParams {
	username: string;
}

export interface GetUserByNameProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GetUserByNamePathParams {}

/**
 *
 */
export async function getUserByName(props: GetUserByNameProps) {
	const { username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/user/${username}`,
		method: 'GET',
		...rest,
	});
}
