import { useQuery } from '@tanstack/react-query';

export interface TeamsListMembersLegacyPathParams {
	team_id: number;
}

export interface TeamsListMembersLegacyQueryParams {
	/**
	 * @default "all"
	 */
	role?: 'all' | 'maintainer' | 'member';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListMembersLegacyQueryProps extends TeamsListMembersLegacyPathParams {
	queryParams: TeamsListMembersLegacyQueryParams;
}

export function useTeamsListMembersLegacyQuery(props: UseTeamsListMembersLegacyQueryProps) {
	const { team_id, queryParams } = props;

	return useQuery(['teams/list-members-legacy', team_id, queryParams]);
}
