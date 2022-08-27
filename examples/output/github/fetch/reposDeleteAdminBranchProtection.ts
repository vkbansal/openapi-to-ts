export interface ReposDeleteAdminBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposDeleteAdminBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteAdminBranchProtectionPathParams {}

export async function reposDeleteAdminBranchProtection(
	props: ReposDeleteAdminBranchProtectionProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
		{
			method: 'DELETE',
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
