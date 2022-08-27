export interface DeleteOrderPathParams {
	/**
	 * @format int64
	 */
	orderId: number;
}

export interface DeleteOrderProps
	extends Omit<RequestInit, 'method' | 'body'>,
		DeleteOrderPathParams {}

export async function deleteOrder(props: DeleteOrderProps) {
	const { orderId, ...rest } = props;

	const response = await fetch(`/store/order/${orderId}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
