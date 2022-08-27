import { useQuery } from '@tanstack/react-query';

export interface TeamsCheckPermissionsForRepoInOrgPathParams {
	org: string;
	team_slug: string;
	owner: string;
	repo: string;
}

export interface UseTeamsCheckPermissionsForRepoInOrgQueryProps
	extends TeamsCheckPermissionsForRepoInOrgPathParams {}

export function useTeamsCheckPermissionsForRepoInOrgQuery(
	props: UseTeamsCheckPermissionsForRepoInOrgQueryProps,
) {
	const { org, team_slug, owner, repo } = props;

	return useQuery(['teams/check-permissions-for-repo-in-org', org, team_slug, owner, repo]);
}
