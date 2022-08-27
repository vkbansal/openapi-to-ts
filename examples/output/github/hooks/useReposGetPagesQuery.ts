import { useQuery } from '@tanstack/react-query';

export interface ReposGetPagesPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetPagesQueryProps extends ReposGetPagesPathParams {}

export function useReposGetPagesQuery(props: UseReposGetPagesQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-pages', owner, repo]);
}
