export interface ReposUploadReleaseAssetQueryParams {
	name?: string;
	label?: string;
}

export interface ReposUploadReleaseAssetPathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposUploadReleaseAssetProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUploadReleaseAssetPathParams {
	queryParams: ReposUploadReleaseAssetQueryParams;
}

export async function reposUploadReleaseAsset(props: ReposUploadReleaseAssetProps) {
	const { owner, repo, release_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/${release_id}/assets`, {
		method: 'POST',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
