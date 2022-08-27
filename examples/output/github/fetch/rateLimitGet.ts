/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface RateLimitGetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function rateLimitGet(props: RateLimitGetProps) {
	const { ...rest } = props;

	const response = await fetch(`/rate_limit`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
