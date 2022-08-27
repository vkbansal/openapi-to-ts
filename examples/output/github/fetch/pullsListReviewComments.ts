export interface PullsListReviewCommentsQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListReviewCommentsPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListReviewCommentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListReviewCommentsPathParams {
	queryParams: PullsListReviewCommentsQueryParams;
}

export async function pullsListReviewComments(props: PullsListReviewCommentsProps) {
	const { owner, repo, pull_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/comments`, {
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
