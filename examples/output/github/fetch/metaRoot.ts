export interface MetaRootProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function metaRoot(props: MetaRootProps) {
	const { ...rest } = props;

	const response = await fetch(`/`, {
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
