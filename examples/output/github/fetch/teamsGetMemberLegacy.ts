/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsGetMemberLegacyPathParams {
	team_id: number;
	username: string;
}

export interface TeamsGetMemberLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsGetMemberLegacyPathParams {}

/**
 * The "Get team member" endpoint (described below) is deprecated.
 *
 * We recommend using the [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
 *
 * To list members in a team, the team must be visible to the authenticated user.
 * @deprecated
 */
export async function teamsGetMemberLegacy(props: TeamsGetMemberLegacyProps) {
	const { team_id, username, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/teams/${team_id}/members/${username}`,
		method: 'GET',
		...rest,
	});
}
