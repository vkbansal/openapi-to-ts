/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface DeleteOrderPathParams {
	/**
	 * @format int64
	 */
	orderId: number;
}

export interface DeleteOrderProps
	extends Omit<RequestInit, 'method' | 'body'>,
		DeleteOrderPathParams {}

/**
 * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 */
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
