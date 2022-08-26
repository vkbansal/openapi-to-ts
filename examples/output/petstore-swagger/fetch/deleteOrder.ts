export interface DeleteOrderPathParams {
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
	});

	const json = await response.json();

	return json;
}
