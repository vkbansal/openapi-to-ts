export interface TeamsCheckPermissionsForRepoLegacyPathParams {
	team_id: number;
	owner: string;
	repo: string;
}

export interface TeamsCheckPermissionsForRepoLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCheckPermissionsForRepoLegacyPathParams {}

export async function teamsCheckPermissionsForRepoLegacy(
	props: TeamsCheckPermissionsForRepoLegacyProps,
) {
	const { team_id, owner, repo, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/repos/${owner}/${repo}`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
