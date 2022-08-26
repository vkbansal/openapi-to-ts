export interface GetOrderByIdPathParams {
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
	});

	const json = await response.json();

	return json;
}
