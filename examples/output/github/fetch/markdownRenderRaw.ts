export interface MarkdownRenderRawProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function markdownRenderRaw(props: MarkdownRenderRawProps) {
	const { ...rest } = props;

	const response = await fetch(`/markdown/raw`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
