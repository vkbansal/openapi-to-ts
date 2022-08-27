export interface ReposListForksQueryParams {
	/**
	 * @default "newest"
	 */
	sort?: 'newest' | 'oldest' | 'stargazers' | 'watchers';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	org?: string;
	organization?: string;
}

export interface ReposListForksPathParams {
	owner: string;
	repo: string;
}

export interface ReposListForksProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListForksPathParams {
	queryParams: ReposListForksQueryParams;
}

export async function reposListForks(props: ReposListForksProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/forks`, {
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
