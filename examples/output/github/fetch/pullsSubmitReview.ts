/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsSubmitReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsSubmitReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsSubmitReviewPathParams {}

export async function pullsSubmitReview(props: PullsSubmitReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}/events`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}