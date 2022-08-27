export interface PullsRequestReviewersPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsRequestReviewersRequestBody {
	/**
	 * An array of user `login`s that will be requested.
	 */
	reviewers?: string[];
	/**
	 * An array of team `slug`s that will be requested.
	 */
	team_reviewers?: string[];
}

export interface PullsRequestReviewersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsRequestReviewersPathParams {
	body: PullsRequestReviewersRequestBody;
}

export async function pullsRequestReviewers(props: PullsRequestReviewersProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/requested_reviewers`, {
		method: 'POST',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
