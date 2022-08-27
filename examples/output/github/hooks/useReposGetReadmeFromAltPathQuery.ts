import { useQuery } from '@tanstack/react-query';

export interface ReposGetReadmeFromAltPathPathParams {
	owner: string;
	repo: string;
	dir: string;
}

export interface ReposGetReadmeFromAltPathQueryParams {
	ref?: string;
}

export interface UseReposGetReadmeFromAltPathQueryProps
	extends ReposGetReadmeFromAltPathPathParams {
	queryParams: ReposGetReadmeFromAltPathQueryParams;
}

export function useReposGetReadmeFromAltPathQuery(props: UseReposGetReadmeFromAltPathQueryProps) {
	const { owner, repo, dir, queryParams } = props;

	return useQuery(['repos/get-readme-from-alt-path', owner, repo, dir, queryParams]);
}
