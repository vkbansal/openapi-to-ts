import { useQuery } from '@tanstack/react-query';

export interface ReposGetContributorsStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetContributorsStatsQueryProps
	extends ReposGetContributorsStatsPathParams {}

export function useReposGetContributorsStatsQuery(props: UseReposGetContributorsStatsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-contributors-stats', owner, repo]);
}
