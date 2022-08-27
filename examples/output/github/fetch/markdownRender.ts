/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface MarkdownRenderProps extends Omit<RequestInit, 'method' | 'body'> {}

export async function markdownRender(props: MarkdownRenderProps) {
	const { ...rest } = props;

	const response = await fetch(`/markdown`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}
