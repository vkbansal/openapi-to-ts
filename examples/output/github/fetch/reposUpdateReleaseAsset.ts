/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposUpdateReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface ReposUpdateReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateReleaseAssetPathParams {}

export async function reposUpdateReleaseAsset(props: ReposUpdateReleaseAssetProps) {
	const { owner, repo, asset_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/assets/${asset_id}`, {
		method: 'PATCH',
		...rest,
	});

	const json = await response.json();

	return json;
}
