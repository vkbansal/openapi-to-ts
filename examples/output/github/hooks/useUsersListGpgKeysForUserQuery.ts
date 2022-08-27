import { useQuery } from '@tanstack/react-query';

export interface UsersListGpgKeysForUserPathParams {
	username: string;
}

export interface UsersListGpgKeysForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListGpgKeysForUserQueryProps extends UsersListGpgKeysForUserPathParams {
	queryParams: UsersListGpgKeysForUserQueryParams;
}

export function useUsersListGpgKeysForUserQuery(props: UseUsersListGpgKeysForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-gpg-keys-for-user', username, queryParams]);
}
