import { useQuery } from '@tanstack/react-query';

export interface TeamsGetLegacyPathParams {
	team_id: number;
}

export interface UseTeamsGetLegacyQueryProps extends TeamsGetLegacyPathParams {}

export function useTeamsGetLegacyQuery(props: UseTeamsGetLegacyQueryProps) {
	const { team_id } = props;

	return useQuery(['teams/get-legacy', team_id]);
}
