import { useQuery } from '@tanstack/react-query';

export interface UsersListFollowedByAuthenticatedQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListFollowedByAuthenticatedQueryProps {
	queryParams: UsersListFollowedByAuthenticatedQueryParams;
}

export function useUsersListFollowedByAuthenticatedQuery(
	props: UseUsersListFollowedByAuthenticatedQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['users/list-followed-by-authenticated', queryParams]);
}
