import { useQuery } from '@tanstack/react-query';

export interface ReposGetLatestReleasePathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetLatestReleaseQueryProps extends ReposGetLatestReleasePathParams {}

export function useReposGetLatestReleaseQuery(props: UseReposGetLatestReleaseQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-latest-release', owner, repo]);
}
