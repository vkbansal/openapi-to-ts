/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface TeamsCheckPermissionsForProjectLegacyPathParams {
	team_id: number;
	project_id: number;
}

export interface TeamsCheckPermissionsForProjectLegacyProps
	extends Omit<RequestInit, 'method' | 'body'>,
		TeamsCheckPermissionsForProjectLegacyPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
 *
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 * @deprecated
 */
export async function teamsCheckPermissionsForProjectLegacy(
	props: TeamsCheckPermissionsForProjectLegacyProps,
) {
	const { team_id, project_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/teams/${team_id}/projects/${project_id}`,
		method: 'GET',
		...rest,
	});
}
