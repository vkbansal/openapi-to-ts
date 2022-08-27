/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposSetTeamAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposSetTeamAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetTeamAccessRestrictionsPathParams {}

export async function reposSetTeamAccessRestrictions(props: ReposSetTeamAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
		{
			method: 'PUT',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}