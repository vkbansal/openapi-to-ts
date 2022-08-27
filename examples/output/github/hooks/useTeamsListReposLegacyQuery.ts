import { useQuery } from '@tanstack/react-query';

export interface TeamsListReposLegacyPathParams {
	team_id: number;
}

export interface TeamsListReposLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListReposLegacyQueryProps extends TeamsListReposLegacyPathParams {
	queryParams: TeamsListReposLegacyQueryParams;
}

export function useTeamsListReposLegacyQuery(props: UseTeamsListReposLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-repos-legacy', team_id, queryParams]);
}
