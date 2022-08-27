/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposSetAdminBranchProtectionPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposSetAdminBranchProtectionProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetAdminBranchProtectionPathParams {}

export async function reposSetAdminBranchProtection(props: ReposSetAdminBranchProtectionProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/enforce_admins`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}