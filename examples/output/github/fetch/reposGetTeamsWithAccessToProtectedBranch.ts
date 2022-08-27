export interface ReposGetTeamsWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetTeamsWithAccessToProtectedBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTeamsWithAccessToProtectedBranchPathParams {}

export async function reposGetTeamsWithAccessToProtectedBranch(
	props: ReposGetTeamsWithAccessToProtectedBranchProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
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
