import { useQuery } from '@tanstack/react-query';

export interface GetOrderByIdPathParams {
	/**
	 * @format int64
	 */
	orderId: number;
}

export interface UseGetOrderByIdQueryProps extends GetOrderByIdPathParams {}

export function useGetOrderByIdQuery(props: UseGetOrderByIdQueryProps) {
	const { orderId } = props;

	return useQuery(['getOrderById', orderId]);
}
