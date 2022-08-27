import { useQuery } from '@tanstack/react-query';

export interface TeamsListForAuthenticatedUserQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseTeamsListForAuthenticatedUserQueryProps {
	queryParams: TeamsListForAuthenticatedUserQueryParams;
}

export function useTeamsListForAuthenticatedUserQuery(
	props: UseTeamsListForAuthenticatedUserQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['teams/list-for-authenticated-user', queryParams]);
}
