export interface PullsUpdateBranchPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsUpdateBranchRequestBody {
	/**
	 * The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://docs.github.com/rest/reference/repos#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.
	 */
	expected_head_sha?: string;
}

export interface PullsUpdateBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsUpdateBranchPathParams {
	body: PullsUpdateBranchRequestBody;
}

export async function pullsUpdateBranch(props: PullsUpdateBranchProps) {
	const { owner, repo, pull_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/update-branch`, {
		method: 'PUT',
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
