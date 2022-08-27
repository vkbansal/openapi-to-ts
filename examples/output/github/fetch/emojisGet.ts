export interface EmojisGetProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function emojisGet(props: EmojisGetProps) {
	const { ...rest } = props;

	const response = await fetch(`/emojis`, {
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
