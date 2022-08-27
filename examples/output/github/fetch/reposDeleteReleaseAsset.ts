/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposDeleteReleaseAssetPathParams {
	owner: string;
	repo: string;
	asset_id: number;
}

export interface ReposDeleteReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteReleaseAssetPathParams {}

export async function reposDeleteReleaseAsset(props: ReposDeleteReleaseAssetProps) {
	const { owner, repo, asset_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/assets/${asset_id}`, {
		method: 'DELETE',
		...rest,
	});

	const json = await response.json();

	return json;
}
