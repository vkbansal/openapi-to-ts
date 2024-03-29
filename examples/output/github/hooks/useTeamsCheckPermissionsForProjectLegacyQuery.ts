/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseTeamsCheckPermissionsForProjectLegacyQueryPathParams {
	team_id: number;
	project_id: number;
}

export interface UseTeamsCheckPermissionsForProjectLegacyQueryProps
	extends UseTeamsCheckPermissionsForProjectLegacyQueryPathParams {}

/**
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
 *
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 * @deprecated
 */

export function useTeamsCheckPermissionsForProjectLegacyQuery(
	props: UseTeamsCheckPermissionsForProjectLegacyQueryProps,
) {
	const { team_id, project_id } = props;

	return useQuery(['teams/check-permissions-for-project-legacy', team_id, project_id]);
}
