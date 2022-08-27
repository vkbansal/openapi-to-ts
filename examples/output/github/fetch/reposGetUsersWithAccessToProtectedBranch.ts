export interface ReposGetUsersWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetUsersWithAccessToProtectedBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetUsersWithAccessToProtectedBranchPathParams {}

export async function reposGetUsersWithAccessToProtectedBranch(
	props: ReposGetUsersWithAccessToProtectedBranchProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
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
