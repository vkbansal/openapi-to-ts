/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface GitignoreGetTemplatePathParams {
	name: string;
}

export interface GitignoreGetTemplateProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitignoreGetTemplatePathParams {}

/**
 * The API also allows fetching the source of a single template.
 * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
 */
export async function gitignoreGetTemplate(props: GitignoreGetTemplateProps) {
	const { name, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/gitignore/templates/${name}`,
		method: 'GET',
		...rest,
	});
}
