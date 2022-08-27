export interface PullsUpdateReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsUpdateReviewRequestBody {
	/**
	 * The body text of the pull request review.
	 */
	body: string;
}

export interface PullsUpdateReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateReviewPathParams {
	body: PullsUpdateReviewRequestBody;
}

export async function pullsUpdateReview(props: PullsUpdateReviewProps) {
	const { owner, repo, pull_number, review_id, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}`,
		{
			method: 'PUT',
			body: JSON.stringify(body),
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
