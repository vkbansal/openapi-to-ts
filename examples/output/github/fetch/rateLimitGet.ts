export interface RateLimitGetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function rateLimitGet(props: RateLimitGetProps) {
	const { ...rest } = props;

	const response = await fetch(`/rate_limit`, {
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
