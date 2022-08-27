export interface TeamsRemoveProjectLegacyPathParams {
	team_id: number;
	project_id: number;
}

export interface TeamsRemoveProjectLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsRemoveProjectLegacyPathParams {}

export async function teamsRemoveProjectLegacy(props: TeamsRemoveProjectLegacyProps) {
	const { team_id, project_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/projects/${project_id}`, {
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
