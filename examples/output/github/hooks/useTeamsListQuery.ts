import { useQuery } from '@tanstack/react-query';

export interface TeamsListPathParams {
	org: string;
}

export interface TeamsListQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListQueryProps extends TeamsListPathParams {
	queryParams: TeamsListQueryParams;
}

export function useTeamsListQuery(props: UseTeamsListQueryProps) {
	const { org, queryParams } = props;

	return useQuery(['teams/list', org, queryParams]);
}
