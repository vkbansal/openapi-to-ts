import { useQuery } from '@tanstack/react-query';
export interface UseUsersListBlockedByAuthenticatedQueryProps {}

export function useUsersListBlockedByAuthenticatedQuery(
	props: UseUsersListBlockedByAuthenticatedQueryProps,
) {
	const {} = props;

	return useQuery(['users/list-blocked-by-authenticated']);
}
