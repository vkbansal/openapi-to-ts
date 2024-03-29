/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposUpdateReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface ReposUpdateReleaseAssetRequestBody {
	/**
	 * An alternate short description of the asset. Used in place of the filename.
	 */
	label?: string;
	/**
	 * The file name of the asset.
	 */
	name?: string;
	/**
	 * @example "\"uploaded\""
	 */
	state?: string;
}

export interface ReposUpdateReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateReleaseAssetPathParams {
	body: ReposUpdateReleaseAssetRequestBody;
}

/**
 * Users with push access to the repository can edit a release asset.
 */
export async function reposUpdateReleaseAsset(props: ReposUpdateReleaseAssetProps) {
	const { owner, repo, asset_id, ...rest } = props;

	return _fetcher<unknown, unknown, ReposUpdateReleaseAssetRequestBody>({
		path: `/repos/${owner}/${repo}/releases/assets/${asset_id}`,
		method: 'PATCH',
		...rest,
	});
}
