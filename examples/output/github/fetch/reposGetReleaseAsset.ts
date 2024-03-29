/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface ReposGetReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReleaseAssetPathParams {}

/**
 * To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
 */
export async function reposGetReleaseAsset(props: ReposGetReleaseAssetProps) {
	const { owner, repo, asset_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/releases/assets/${asset_id}`,
		method: 'GET',
		...rest,
	});
}
