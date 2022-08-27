export interface TeamsListIdpGroupsForLegacyPathParams {
	team_id: number;
}

export interface TeamsListIdpGroupsForLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsListIdpGroupsForLegacyPathParams {}

export async function teamsListIdpGroupsForLegacy(props: TeamsListIdpGroupsForLegacyProps) {
	const { team_id, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/team-sync/group-mappings`, {
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
