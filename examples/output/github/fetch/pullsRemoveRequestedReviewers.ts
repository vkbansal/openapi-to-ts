export interface PullsRemoveRequestedReviewersPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsRemoveRequestedReviewersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsRemoveRequestedReviewersPathParams {}

export async function pullsRemoveRequestedReviewers(props: PullsRemoveRequestedReviewersProps) {
	const { owner, repo, pull_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/requested_reviewers`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
