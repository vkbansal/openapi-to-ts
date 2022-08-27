/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposSetUserAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposSetUserAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetUserAccessRestrictionsPathParams {}

export async function reposSetUserAccessRestrictions(props: ReposSetUserAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
		{
			method: 'PUT',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}
