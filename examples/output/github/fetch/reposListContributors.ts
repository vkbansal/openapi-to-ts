export interface ReposListContributorsQueryParams {
	anon?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListContributorsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListContributorsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListContributorsPathParams {
	queryParams: ReposListContributorsQueryParams;
}

export async function reposListContributors(props: ReposListContributorsProps) {
	const { owner, repo, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/contributors`, {
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
