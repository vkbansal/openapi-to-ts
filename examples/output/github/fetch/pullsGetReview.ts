/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsGetReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsGetReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsGetReviewPathParams {}

export async function pullsGetReview(props: PullsGetReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}`,
		{
			method: 'GET',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
