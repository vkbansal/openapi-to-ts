/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface UsersListPublicKeysForUserPathParams {
	username: string;
}

export interface UsersListPublicKeysForUserQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseUsersListPublicKeysForUserQueryProps
	extends UsersListPublicKeysForUserPathParams {
	queryParams: UsersListPublicKeysForUserQueryParams;
}

export function useUsersListPublicKeysForUserQuery(props: UseUsersListPublicKeysForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-public-keys-for-user', username, queryParams]);
}
