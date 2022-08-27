export interface ReposListBranchesForHeadCommitPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposListBranchesForHeadCommitProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListBranchesForHeadCommitPathParams {}

export async function reposListBranchesForHeadCommit(props: ReposListBranchesForHeadCommitProps) {
	const { owner, repo, commit_sha, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/commits/${commit_sha}/branches-where-head`,
		{
			method: 'GET',
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
