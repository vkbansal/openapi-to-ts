import { useQuery } from '@tanstack/react-query';

export interface ReposGetAllTopicsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetAllTopicsQueryParams {
	/**
	 * @default 1
	 */
	page?: number;
	/**
	 * @default 30
	 */
	per_page?: number;
}

export interface UseReposGetAllTopicsQueryProps extends ReposGetAllTopicsPathParams {
	queryParams: ReposGetAllTopicsQueryParams;
}

export function useReposGetAllTopicsQuery(props: UseReposGetAllTopicsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/get-all-topics', owner, repo, queryParams]);
}
