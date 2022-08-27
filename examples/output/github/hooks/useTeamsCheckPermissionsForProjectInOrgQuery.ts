import { useQuery } from '@tanstack/react-query';

export interface TeamsCheckPermissionsForProjectInOrgPathParams {
	org: string;
	team_slug: string;
	project_id: number;
}

export interface UseTeamsCheckPermissionsForProjectInOrgQueryProps
	extends TeamsCheckPermissionsForProjectInOrgPathParams {}

export function useTeamsCheckPermissionsForProjectInOrgQuery(
	props: UseTeamsCheckPermissionsForProjectInOrgQueryProps,
) {
	const { org, team_slug, project_id } = props;

	return useQuery(['teams/check-permissions-for-project-in-org', org, team_slug, project_id]);
}
