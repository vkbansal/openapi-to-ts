import { useQuery } from '@tanstack/react-query';

export interface UsersListFollowersForUserPathParams {
	username: string;
}

export interface UsersListFollowersForUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseUsersListFollowersForUserQueryProps
	extends UsersListFollowersForUserPathParams {
	queryParams: UsersListFollowersForUserQueryParams;
}

export function useUsersListFollowersForUserQuery(props: UseUsersListFollowersForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-followers-for-user', username, queryParams]);
}
