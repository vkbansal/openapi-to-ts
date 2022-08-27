/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposSetAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposSetAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetAppAccessRestrictionsPathParams {}

export async function reposSetAppAccessRestrictions(props: ReposSetAppAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
		{
			method: 'PUT',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
