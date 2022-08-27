export interface ReposRemoveUserAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveUserAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveUserAccessRestrictionsPathParams {}

export async function reposRemoveUserAccessRestrictions(
	props: ReposRemoveUserAccessRestrictionsProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
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
