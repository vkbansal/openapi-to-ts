import { useQuery } from '@tanstack/react-query';
export function useGetInventory() {
	return useQuery(['getInventory']);
}
