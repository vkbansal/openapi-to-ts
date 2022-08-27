export interface PullsListReviewsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListReviewsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListReviewsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListReviewsPathParams {
	queryParams: PullsListReviewsQueryParams;
}

export async function pullsListReviews(props: PullsListReviewsProps) {
	const { owner, repo, pull_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/reviews`, {
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
