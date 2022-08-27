import { useQuery } from '@tanstack/react-query';

export interface ReposGetCommitActivityStatsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetCommitActivityStatsQueryProps
	extends ReposGetCommitActivityStatsPathParams {}

export function useReposGetCommitActivityStatsQuery(
	props: UseReposGetCommitActivityStatsQueryProps,
) {
	const { owner, repo } = props;

	return useQuery(['repos/get-commit-activity-stats', owner, repo]);
}
