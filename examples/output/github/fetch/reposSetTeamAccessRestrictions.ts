export interface ReposSetTeamAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"teams":["my-team"]}
 */
export interface ReposSetTeamAccessRestrictionsRequestBody {
	/**
	 * teams parameter
	 */
	teams: string[];
}

export interface ReposSetTeamAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposSetTeamAccessRestrictionsPathParams {
	body: ReposSetTeamAccessRestrictionsRequestBody;
}

export async function reposSetTeamAccessRestrictions(props: ReposSetTeamAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
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
