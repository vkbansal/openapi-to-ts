import { useQuery } from '@tanstack/react-query';

export interface UsersListPublicSshKeysForAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListPublicSshKeysForAuthenticatedQueryProps {
	queryParams: UsersListPublicSshKeysForAuthenticatedQueryParams;
}

export function useUsersListPublicSshKeysForAuthenticatedQuery(
	props: UseUsersListPublicSshKeysForAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-public-ssh-keys-for-authenticated', queryParams]);
}
