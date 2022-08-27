import { useQuery } from '@tanstack/react-query';

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

export interface UseUsersListPublicKeysForUserQueryProps
	extends UsersListPublicKeysForUserPathParams {
	queryParams: UsersListPublicKeysForUserQueryParams;
}

export function useUsersListPublicKeysForUserQuery(props: UseUsersListPublicKeysForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-public-keys-for-user', username, queryParams]);
}
