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

export async function reposUpdateReleaseAsset(props: ReposUpdateReleaseAssetProps) {
	const { owner, repo, asset_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/assets/${asset_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
