export interface ReposGetBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetBranchProtectionPathParams {}

export async function reposGetBranchProtection(props: ReposGetBranchProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches/${branch}/protection`, {
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
