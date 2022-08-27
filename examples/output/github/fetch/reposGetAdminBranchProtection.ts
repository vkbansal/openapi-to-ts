export interface ReposGetAdminBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetAdminBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAdminBranchProtectionPathParams {}

export async function reposGetAdminBranchProtection(props: ReposGetAdminBranchProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
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
