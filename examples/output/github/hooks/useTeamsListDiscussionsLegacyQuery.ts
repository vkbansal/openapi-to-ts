import { useQuery } from '@tanstack/react-query';

export interface TeamsListDiscussionsLegacyPathParams {
	team_id: number;
}

export interface TeamsListDiscussionsLegacyQueryParams {
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListDiscussionsLegacyQueryProps
	extends TeamsListDiscussionsLegacyPathParams {
	queryParams: TeamsListDiscussionsLegacyQueryParams;
}

export function useTeamsListDiscussionsLegacyQuery(props: UseTeamsListDiscussionsLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-discussions-legacy', team_id, queryParams]);
}
