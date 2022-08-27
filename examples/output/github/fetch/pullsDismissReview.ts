export interface PullsDismissReviewPathParams {
	owner: string;
	repo: string;
	pull_number: number;
	review_id: number;
}

export interface PullsDismissReviewRequestBody {
	/**
	 * @example "\"APPROVE\""
	 */
	event?: string;
	/**
	 * The message for the pull request review dismissal
	 */
	message: string;
}

export interface PullsDismissReviewProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsDismissReviewPathParams {
	body: PullsDismissReviewRequestBody;
}

export async function pullsDismissReview(props: PullsDismissReviewProps) {
	const { owner, repo, pull_number, review_id, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/pulls/${pull_number}/reviews/${review_id}/dismissals`,
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
