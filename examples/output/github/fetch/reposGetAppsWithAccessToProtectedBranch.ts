export interface ReposGetAppsWithAccessToProtectedBranchPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetAppsWithAccessToProtectedBranchProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAppsWithAccessToProtectedBranchPathParams {}

export async function reposGetAppsWithAccessToProtectedBranch(
	props: ReposGetAppsWithAccessToProtectedBranchProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
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
