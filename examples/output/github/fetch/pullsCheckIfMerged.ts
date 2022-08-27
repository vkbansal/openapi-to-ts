export interface PullsCheckIfMergedPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsCheckIfMergedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCheckIfMergedPathParams {}

export async function pullsCheckIfMerged(props: PullsCheckIfMergedProps) {
	const { owner, repo, pull_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/pulls/${pull_number}/merge`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
