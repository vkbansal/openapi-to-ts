export type PlaceOrderRequestBody = Order;

export interface PlaceOrderProps extends Omit<RequestInit, 'method' | 'body'> {
	body: PlaceOrderRequestBody;
}

export async function placeOrder(props: PlaceOrderProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/store/order`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
