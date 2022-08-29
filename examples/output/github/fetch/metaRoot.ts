/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface MetaRootProps extends Omit<RequestInit, 'method' | 'body'> {}

/**
 * Get Hypermedia links to resources accessible in GitHub's REST API
 */
export async function metaRoot(props: MetaRootProps) {
	const { ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/`,
		method: 'GET',
		...rest,
	});
}
