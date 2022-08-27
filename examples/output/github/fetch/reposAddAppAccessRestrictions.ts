export interface ReposAddAppAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"apps":["my-app"]}
 */
export interface ReposAddAppAccessRestrictionsRequestBody {
	/**
	 * apps parameter
	 */
	apps: string[];
}

export interface ReposAddAppAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddAppAccessRestrictionsPathParams {
	body: ReposAddAppAccessRestrictionsRequestBody;
}

export async function reposAddAppAccessRestrictions(props: ReposAddAppAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/apps`,
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
