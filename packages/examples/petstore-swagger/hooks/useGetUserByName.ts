import { useQuery } from '@tanstack/react-query';
export function useGetUserByName() {
	return useQuery(['getUserByName']);
}
