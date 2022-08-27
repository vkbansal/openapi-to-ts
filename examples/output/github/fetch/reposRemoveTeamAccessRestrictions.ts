export interface ReposRemoveTeamAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveTeamAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveTeamAccessRestrictionsPathParams {}

export async function reposRemoveTeamAccessRestrictions(
	props: ReposRemoveTeamAccessRestrictionsProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
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
