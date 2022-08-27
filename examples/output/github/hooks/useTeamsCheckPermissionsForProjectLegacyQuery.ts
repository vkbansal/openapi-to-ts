import { useQuery } from '@tanstack/react-query';

export interface TeamsCheckPermissionsForProjectLegacyPathParams {
	team_id: number;
	project_id: number;
}

export interface UseTeamsCheckPermissionsForProjectLegacyQueryProps
	extends TeamsCheckPermissionsForProjectLegacyPathParams {}

export function useTeamsCheckPermissionsForProjectLegacyQuery(
	props: UseTeamsCheckPermissionsForProjectLegacyQueryProps,
) {
	const { team_id, project_id } = props;

	return useQuery(['teams/check-permissions-for-project-legacy', team_id, project_id]);
}
