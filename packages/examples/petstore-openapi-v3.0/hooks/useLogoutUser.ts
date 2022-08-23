import { useQuery } from '@tanstack/react-query';
export function useLogoutUser() {
	return useQuery(['logoutUser']);
}
