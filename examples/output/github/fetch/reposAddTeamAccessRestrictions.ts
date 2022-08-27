export interface ReposAddTeamAccessRestrictionsPathParams {
	owner: string;
	repo: string;
	branch: string;
}

/**
 * @example {"teams":["my-team"]}
 */
export interface ReposAddTeamAccessRestrictionsRequestBody {
	/**
	 * teams parameter
	 */
	teams: string[];
}

export interface ReposAddTeamAccessRestrictionsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposAddTeamAccessRestrictionsPathParams {
	body: ReposAddTeamAccessRestrictionsRequestBody;
}

export async function reposAddTeamAccessRestrictions(props: ReposAddTeamAccessRestrictionsProps) {
	const { owner, repo, branch, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/branches/${branch}/protection/restrictions/teams`,
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
