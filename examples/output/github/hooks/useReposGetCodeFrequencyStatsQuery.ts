import { useQuery } from '@tanstack/react-query';

export interface ReposGetCodeFrequencyStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetCodeFrequencyStatsQueryProps
	extends ReposGetCodeFrequencyStatsPathParams {}

export function useReposGetCodeFrequencyStatsQuery(props: UseReposGetCodeFrequencyStatsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-code-frequency-stats', owner, repo]);
}
