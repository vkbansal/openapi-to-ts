/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

/**
 *
 */
export async function markdownRender(props: MarkdownRenderProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, MarkdownRenderRequestBody>({
		path: `/markdown`,
		method: 'POST',
		...rest,
	});
}
