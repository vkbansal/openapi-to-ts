export interface PullsListRequestedReviewersQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListRequestedReviewersPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsListRequestedReviewersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListRequestedReviewersPathParams {
	queryParams: PullsListRequestedReviewersQueryParams;
}

export async function pullsListRequestedReviewers(props: PullsListRequestedReviewersProps) {
	const { owner, repo, pull_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/requested_reviewers`, {
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
