import { useQuery } from '@tanstack/react-query';

export interface UseGetOrderByIdQueryProps {
	orderId: string;
}

export function useGetOrderByIdQuery(props: UseGetOrderByIdQueryProps) {
	const { orderId } = props;
	return useQuery(['getOrderById', orderId]);
}
