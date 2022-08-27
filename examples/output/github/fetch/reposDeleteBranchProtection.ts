export interface ReposDeleteBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposDeleteBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteBranchProtectionPathParams {}

export async function reposDeleteBranchProtection(props: ReposDeleteBranchProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/branches/${branch}/protection`, {
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
