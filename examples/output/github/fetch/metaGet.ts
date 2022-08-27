export interface MetaGetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function metaGet(props: MetaGetProps) {
	const { ...rest } = props;

	const response = await fetch(`/meta`, {
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
