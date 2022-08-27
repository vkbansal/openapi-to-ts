import { useQuery } from '@tanstack/react-query';

export interface UsersCheckPersonIsFollowedByAuthenticatedPathParams {
	username: string;
}

export interface UseUsersCheckPersonIsFollowedByAuthenticatedQueryProps
	extends UsersCheckPersonIsFollowedByAuthenticatedPathParams {}

export function useUsersCheckPersonIsFollowedByAuthenticatedQuery(
	props: UseUsersCheckPersonIsFollowedByAuthenticatedQueryProps,
) {
	const { username } = props;

	return useQuery(['users/check-person-is-followed-by-authenticated', username]);
}
