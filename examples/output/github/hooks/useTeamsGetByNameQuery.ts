import { useQuery } from '@tanstack/react-query';

export interface TeamsGetByNamePathParams {
	org: string;
	team_slug: string;
}

export interface UseTeamsGetByNameQueryProps extends TeamsGetByNamePathParams {}

export function useTeamsGetByNameQuery(props: UseTeamsGetByNameQueryProps) {
	const { org, team_slug } = props;

	return useQuery(['teams/get-by-name', org, team_slug]);
}
