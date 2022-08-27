export interface ReposGetAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

export interface ReposGetAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAccessRestrictionsPathParams {}

export async function reposGetAccessRestrictions(props: ReposGetAccessRestrictionsProps) {
	const { owner, repo, branch, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions`,
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
