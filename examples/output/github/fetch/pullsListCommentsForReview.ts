/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsListCommentsForReviewQueryParams {
	per_page?: number;
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
		},
	);

	const json = await response.json();

	return json;
}
