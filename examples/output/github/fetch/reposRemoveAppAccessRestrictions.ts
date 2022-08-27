export interface ReposRemoveAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposRemoveAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposRemoveAppAccessRestrictionsPathParams {}

export async function reposRemoveAppAccessRestrictions(
	props: ReposRemoveAppAccessRestrictionsProps,
) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
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
