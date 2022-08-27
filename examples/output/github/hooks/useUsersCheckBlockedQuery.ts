import { useQuery } from '@tanstack/react-query';

export interface UsersCheckBlockedPathParams {
	username: string;
}

export interface UseUsersCheckBlockedQueryProps extends UsersCheckBlockedPathParams {}

export function useUsersCheckBlockedQuery(props: UseUsersCheckBlockedQueryProps) {
	const { username } = props;

	return useQuery(['users/check-blocked', username]);
}
