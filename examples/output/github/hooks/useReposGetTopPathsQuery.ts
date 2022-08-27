import { useQuery } from '@tanstack/react-query';

export interface ReposGetTopPathsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetTopPathsQueryProps extends ReposGetTopPathsPathParams {}

export function useReposGetTopPathsQuery(props: UseReposGetTopPathsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-top-paths', owner, repo]);
}
