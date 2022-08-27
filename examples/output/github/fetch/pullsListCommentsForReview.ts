export interface PullsListCommentsForReviewQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface PullsListCommentsForReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsListCommentsForReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsListCommentsForReviewPathParams {
	queryParams: PullsListCommentsForReviewQueryParams;
}

export async function pullsListCommentsForReview(props: PullsListCommentsForReviewProps) {
	const { owner, repo, pull_number, review_id, queryParams, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}/comments`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
