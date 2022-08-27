export interface ReposGetBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetBranchPathParams {}

export async function reposGetBranch(props: ReposGetBranchProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches/${branch}`, {
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
