export interface ReposSetAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"apps":["my-app"]}
 */
export interface ReposSetAppAccessRestrictionsRequestBody {
	/**
	 * apps parameter
	 */
	apps: string[];
}

export interface ReposSetAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetAppAccessRestrictionsPathParams {
	body: ReposSetAppAccessRestrictionsRequestBody;
}

export async function reposSetAppAccessRestrictions(props: ReposSetAppAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
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
