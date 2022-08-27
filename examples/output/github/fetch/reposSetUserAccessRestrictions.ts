export interface ReposSetUserAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"users":["mona"]}
 */
export interface ReposSetUserAccessRestrictionsRequestBody {
	/**
	 * users parameter
	 */
	users: string[];
}

export interface ReposSetUserAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetUserAccessRestrictionsPathParams {
	body: ReposSetUserAccessRestrictionsRequestBody;
}

export async function reposSetUserAccessRestrictions(props: ReposSetUserAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/users`,
		{
			method: 'PUT',
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
