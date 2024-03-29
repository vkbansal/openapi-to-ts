/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface UsersListFollowingForUserPathParams {
	username: string;
}

export interface UsersListFollowingForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UsersListFollowingForUserProps
	extends Omit<RequestInit, 'method' | 'body'>,
		UsersListFollowingForUserPathParams {
	queryParams: UsersListFollowingForUserQueryParams;
	paramsSerializer?: (params: UsersListFollowingForUserQueryParams) => string;
}

/**
 * Lists the people who the specified user follows.
 */
export async function usersListFollowingForUser(props: UsersListFollowingForUserProps) {
	const { username, ...rest } = props;

	return _fetcher<unknown, UsersListFollowingForUserQueryParams, unknown>({
		path: `/users/${username}/following`,
		method: 'GET',
		...rest,
	});
}
