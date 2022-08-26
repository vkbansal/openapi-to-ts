import { useQuery } from '@tanstack/react-query';

export interface UseGetInventoryQueryProps {}

export function useGetInventoryQuery(props: UseGetInventoryQueryProps) {
	const {} = props;
	return useQuery(['getInventory']);
}
