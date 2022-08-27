export interface ReposListReleasesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListReleasesPathParams {
	owner: string;
	repo: string;
}

export interface ReposListReleasesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListReleasesPathParams {
	queryParams: ReposListReleasesQueryParams;
}

export async function reposListReleases(props: ReposListReleasesProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/releases`, {
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
