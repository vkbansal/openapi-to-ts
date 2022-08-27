export interface ReposDeleteAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposDeleteAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteAccessRestrictionsPathParams {}

export async function reposDeleteAccessRestrictions(props: ReposDeleteAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions`,
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
