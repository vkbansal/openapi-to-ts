import { useQuery } from '@tanstack/react-query';
export interface UseUsersGetAuthenticatedQueryProps {}

export function useUsersGetAuthenticatedQuery(props: UseUsersGetAuthenticatedQueryProps) {
	const {} = props;

	return useQuery(['users/get-authenticated']);
}
