/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposGetReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface ReposGetReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetReleaseAssetPathParams {}

export async function reposGetReleaseAsset(props: ReposGetReleaseAssetProps) {
	const { owner, repo, asset_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/assets/${asset_id}`, {
		method: 'GET',
		...rest,
	});

	const json = await response.json();

	return json;
}
