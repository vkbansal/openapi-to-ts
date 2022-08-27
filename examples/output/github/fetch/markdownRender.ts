export interface MarkdownRenderRequestBody {
	/**
	 * The repository context to use when creating references in `gfm` mode.
	 */
	context?: string;
	/**
	 * The rendering mode.
	 * @default "markdown"
	 * @example "markdown"
	 */
	mode?: 'gfm' | 'markdown';
	/**
	 * The Markdown text to render in HTML.
	 */
	text: string;
}

export interface MarkdownRenderProps extends Omit<RequestInit, 'method' | 'body'> {
	body: MarkdownRenderRequestBody;
}

export async function markdownRender(props: MarkdownRenderProps) {
	const { body, ...rest } = props;

	const response = await fetch(`/markdown`, {
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
