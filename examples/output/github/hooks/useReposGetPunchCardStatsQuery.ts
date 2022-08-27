import { useQuery } from '@tanstack/react-query';

export interface ReposGetPunchCardStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetPunchCardStatsQueryProps extends ReposGetPunchCardStatsPathParams {}

export function useReposGetPunchCardStatsQuery(props: UseReposGetPunchCardStatsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-punch-card-stats', owner, repo]);
}
