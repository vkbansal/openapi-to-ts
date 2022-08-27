import { useQuery } from '@tanstack/react-query';

export interface ReposCompareCommitsPathParams {
	owner: string;
	repo: string;
	base: string;
	head: string;
}

export interface UseReposCompareCommitsQueryProps extends ReposCompareCommitsPathParams {}

export function useReposCompareCommitsQuery(props: UseReposCompareCommitsQueryProps) {
	const { owner, repo, base, head } = props;

	return useQuery(['repos/compare-commits', owner, repo, base, head]);
}
