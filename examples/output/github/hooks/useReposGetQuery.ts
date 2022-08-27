import { useQuery } from '@tanstack/react-query';

export interface ReposGetPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetQueryProps extends ReposGetPathParams {}

export function useReposGetQuery(props: UseReposGetQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get', owner, repo]);
}
