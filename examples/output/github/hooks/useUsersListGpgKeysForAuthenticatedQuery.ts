import { useQuery } from '@tanstack/react-query';

export interface UsersListGpgKeysForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListGpgKeysForAuthenticatedQueryProps {
	queryParams: UsersListGpgKeysForAuthenticatedQueryParams;
}

export function useUsersListGpgKeysForAuthenticatedQuery(
	props: UseUsersListGpgKeysForAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-gpg-keys-for-authenticated', queryParams]);
}
