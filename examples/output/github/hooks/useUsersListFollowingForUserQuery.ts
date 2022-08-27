import { useQuery } from '@tanstack/react-query';

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

export interface UseUsersListFollowingForUserQueryProps
	extends UsersListFollowingForUserPathParams {
	queryParams: UsersListFollowingForUserQueryParams;
}

export function useUsersListFollowingForUserQuery(props: UseUsersListFollowingForUserQueryProps) {
	const { username, queryParams } = props;

	return useQuery(['users/list-following-for-user', username, queryParams]);
}
