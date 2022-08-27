export interface ReposAddUserAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"users":["mona"]}
 */
export interface ReposAddUserAccessRestrictionsRequestBody {
	/**
	 * users parameter
	 */
	users: string[];
}

export interface ReposAddUserAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddUserAccessRestrictionsPathParams {
	body: ReposAddUserAccessRestrictionsRequestBody;
}

export async function reposAddUserAccessRestrictions(props: ReposAddUserAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
		{
			method: 'POST',
			body: JSON.stringify(body),
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
