export interface ReposListPagesBuildsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListPagesBuildsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListPagesBuildsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListPagesBuildsPathParams {
	queryParams: ReposListPagesBuildsQueryParams;
}

export async function reposListPagesBuilds(props: ReposListPagesBuildsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pages/builds`, {
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
