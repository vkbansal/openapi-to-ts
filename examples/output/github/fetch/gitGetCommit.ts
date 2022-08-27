export interface GitGetCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface GitGetCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		GitGetCommitPathParams {}

export async function gitGetCommit(props: GitGetCommitProps) {
	const { owner, repo, commit_sha, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/git/commits/${commit_sha}`, {
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
