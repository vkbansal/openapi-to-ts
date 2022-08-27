import { useQuery } from '@tanstack/react-query';
export interface UseLogoutUserQueryProps {}

export function useLogoutUserQuery(props: UseLogoutUserQueryProps) {
	const {} = props;

	return useQuery(['logoutUser']);
}
