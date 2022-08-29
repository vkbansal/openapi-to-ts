/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface UsersListPublicKeysForUserPathParams {
	username: string;
}

export interface UsersListPublicKeysForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListPublicKeysForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListPublicKeysForUserPathParams {
	queryParams: UsersListPublicKeysForUserQueryParams;
	paramsSerializer?: (params: UsersListPublicKeysForUserQueryParams) => string;
}

/**
 * Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
 */
export async function usersListPublicKeysForUser(props: UsersListPublicKeysForUserProps) {
	const { username, ...rest } = props;

	return _fetcher<unknown, UsersListPublicKeysForUserQueryParams, unknown>({
		path: `/users/${username}/keys`,
		method: 'GET',
		...rest,
	});
}
