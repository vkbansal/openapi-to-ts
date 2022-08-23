import { useQuery } from '@tanstack/react-query';
export function useGetOrderById() {
	return useQuery(['getOrderById']);
}
