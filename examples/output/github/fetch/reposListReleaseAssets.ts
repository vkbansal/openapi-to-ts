/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReposListReleaseAssetsPathParams {
	owner: string;
	repo: string;
	release_id: number;
}

export interface ReposListReleaseAssetsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListReleaseAssetsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListReleaseAssetsPathParams {
	queryParams: ReposListReleaseAssetsQueryParams;
}

/**
 *
 */
export async function reposListReleaseAssets(props: ReposListReleaseAssetsProps) {
	const { owner, repo, release_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases/${release_id}/assets`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
