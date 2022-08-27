export interface GetOrderByIdPathParams {
	/**
	 * @format int64
	 */
	orderId: number;
}

export interface GetOrderByIdProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GetOrderByIdPathParams {}

export async function getOrderById(props: GetOrderByIdProps) {
	const { orderId, ...rest } = props;

	const response = await fetch(`/store/order/${orderId}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
