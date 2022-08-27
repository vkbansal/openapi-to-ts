import { useQuery } from '@tanstack/react-query';

export interface UsersListFollowersForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListFollowersForAuthenticatedUserQueryProps {
	queryParams: UsersListFollowersForAuthenticatedUserQueryParams;
}

export function useUsersListFollowersForAuthenticatedUserQuery(
	props: UseUsersListFollowersForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-followers-for-authenticated-user', queryParams]);
}
