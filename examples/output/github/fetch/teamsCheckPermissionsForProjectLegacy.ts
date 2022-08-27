export interface TeamsCheckPermissionsForProjectLegacyPathParams {
	team_id: number;
	project_id: number;
}

export interface TeamsCheckPermissionsForProjectLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCheckPermissionsForProjectLegacyPathParams {}

export async function teamsCheckPermissionsForProjectLegacy(
	props: TeamsCheckPermissionsForProjectLegacyProps,
) {
	const { team_id, project_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/projects/${project_id}`, {
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
