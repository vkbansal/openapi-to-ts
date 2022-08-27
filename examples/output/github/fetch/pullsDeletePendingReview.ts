export interface PullsDeletePendingReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsDeletePendingReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsDeletePendingReviewPathParams {}

export async function pullsDeletePendingReview(props: PullsDeletePendingReviewProps) {
	const { owner, repo, pull_number, review_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}`,
		{
			method: 'DELETE',
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
