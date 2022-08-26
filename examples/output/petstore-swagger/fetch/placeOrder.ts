export interface PlaceOrderProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function placeOrder(props: PlaceOrderProps) {
	const { ...rest } = props;

	const response = await fetch(`/store/order`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
