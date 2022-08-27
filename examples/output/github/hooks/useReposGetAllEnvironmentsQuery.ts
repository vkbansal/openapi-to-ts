import { useQuery } from '@tanstack/react-query';

export interface ReposGetAllEnvironmentsPathParams {
	owner: string;
	repo: string;
}

export interface UseReposGetAllEnvironmentsQueryProps extends ReposGetAllEnvironmentsPathParams {}

export function useReposGetAllEnvironmentsQuery(props: UseReposGetAllEnvironmentsQueryProps) {
	const { owner, repo } = props;

	return useQuery(['repos/get-all-environments', owner, repo]);
}
