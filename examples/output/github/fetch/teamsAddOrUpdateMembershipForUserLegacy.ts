/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface TeamsAddOrUpdateMembershipForUserLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsAddOrUpdateMembershipForUserLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsAddOrUpdateMembershipForUserLegacyPathParams {}

export async function teamsAddOrUpdateMembershipForUserLegacy(
	props: TeamsAddOrUpdateMembershipForUserLegacyProps,
) {
	const { team_id, username, ...rest } = props;

	const response = await fetch(`/teams/${team_id}/memberships/${username}`, {
		method: 'PUT',
		...rest,
	});

	const json = await response.json();

	return json;
}
