import { useQuery } from '@tanstack/react-query';

export interface ReposGetContentPathParams {
	owner: string;
	repo: string;
	path: string;
}

export interface ReposGetContentQueryParams {
	ref?: string;
}

export interface UseReposGetContentQueryProps extends ReposGetContentPathParams {
	queryParams: ReposGetContentQueryParams;
}

export function useReposGetContentQuery(props: UseReposGetContentQueryProps) {
	const { owner, repo, path, queryParams } = props;

	return useQuery(['repos/get-content', owner, repo, path, queryParams]);
}
