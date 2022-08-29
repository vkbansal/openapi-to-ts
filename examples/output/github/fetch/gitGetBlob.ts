/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface GitGetBlobPathParams {
	owner: string;
	repo: string;
	file_sha: string;
}

export interface GitGetBlobProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitGetBlobPathParams {}

/**
 * The `content` in the response will always be Base64 encoded.
 *
 * _Note_: This API supports blobs up to 100 megabytes in size.
 */
export async function gitGetBlob(props: GitGetBlobProps) {
	const { owner, repo, file_sha, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/git/blobs/${file_sha}`,
		method: 'GET',
		...rest,
	});
}
