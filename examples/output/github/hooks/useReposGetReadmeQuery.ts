import { useQuery } from '@tanstack/react-query';

export interface ReposGetReadmePathParams {
	owner: string;
	repo: string;
}

export interface ReposGetReadmeQueryParams {
	ref?: string;
}

export interface UseReposGetReadmeQueryProps extends ReposGetReadmePathParams {
	queryParams: ReposGetReadmeQueryParams;
}

export function useReposGetReadmeQuery(props: UseReposGetReadmeQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/get-readme', owner, repo, queryParams]);
}
