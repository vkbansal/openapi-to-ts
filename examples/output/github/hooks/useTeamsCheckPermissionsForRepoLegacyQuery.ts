import { useQuery } from '@tanstack/react-query';

export interface TeamsCheckPermissionsForRepoLegacyPathParams {
	team_id: number;
	owner: string;
	repo: string;
}

export interface UseTeamsCheckPermissionsForRepoLegacyQueryProps
	extends TeamsCheckPermissionsForRepoLegacyPathParams {}

export function useTeamsCheckPermissionsForRepoLegacyQuery(
	props: UseTeamsCheckPermissionsForRepoLegacyQueryProps,
) {
	const { team_id, owner, repo } = props;

	return useQuery(['teams/check-permissions-for-repo-legacy', team_id, owner, repo]);
}
