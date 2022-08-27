/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface PullsUpdateReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsUpdateReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateReviewPathParams {}

export async function pullsUpdateReview(props: PullsUpdateReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}`,
		{
			method: 'PUT',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}