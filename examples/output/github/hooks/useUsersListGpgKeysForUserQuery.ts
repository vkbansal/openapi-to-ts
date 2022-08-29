/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseUsersListGpgKeysForUserQueryPathParams {
	username: string;
}

export interface UseUsersListGpgKeysForUserQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListGpgKeysForUserQueryProps
	extends UseUsersListGpgKeysForUserQueryPathParams {
	queryParams: UseUsersListGpgKeysForUserQueryQueryParams;
}

/**
 * Lists the GPG keys for a user. This information is accessible by anyone.
 */

export function useUsersListGpgKeysForUserQuery(props: UseUsersListGpgKeysForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-gpg-keys-for-user', username, queryParams]);
}
