export interface MetaGetZenProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function metaGetZen(props: MetaGetZenProps) {
	const { ...rest } = props;

	const response = await fetch(`/zen`, {
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
