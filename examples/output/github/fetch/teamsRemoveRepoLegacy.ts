export interface TeamsRemoveRepoLegacyPathParams {
	team_id: number;
	owner: string;
	repo: string;
}

export interface TeamsRemoveRepoLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveRepoLegacyPathParams {}

export async function teamsRemoveRepoLegacy(props: TeamsRemoveRepoLegacyProps) {
	const { team_id, owner, repo, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/repos/${owner}/${repo}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
