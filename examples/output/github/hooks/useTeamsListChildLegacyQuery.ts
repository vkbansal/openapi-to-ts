import { useQuery } from '@tanstack/react-query';

export interface TeamsListChildLegacyPathParams {
	team_id: number;
}

export interface TeamsListChildLegacyQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListChildLegacyQueryProps extends TeamsListChildLegacyPathParams {
	queryParams: TeamsListChildLegacyQueryParams;
}

export function useTeamsListChildLegacyQuery(props: UseTeamsListChildLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-child-legacy', team_id, queryParams]);
}
