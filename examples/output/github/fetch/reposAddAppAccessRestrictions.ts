/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposAddAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposAddAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddAppAccessRestrictionsPathParams {}

export async function reposAddAppAccessRestrictions(props: ReposAddAppAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
		{
			method: 'POST',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}