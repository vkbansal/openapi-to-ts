import { useQuery } from '@tanstack/react-query';

export interface ReposGetParticipationStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetParticipationStatsQueryProps
	extends ReposGetParticipationStatsPathParams {}

export function useReposGetParticipationStatsQuery(props: UseReposGetParticipationStatsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-participation-stats', owner, repo]);
}
