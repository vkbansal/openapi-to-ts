import { useQuery } from '@tanstack/react-query';

export interface ReposListForksPathParams {
	owner: string;
	repo: string;
}

export interface ReposListForksQueryParams {
	/**
	 * @default "newest"
	 */
	sort?: 'newest' | 'oldest' | 'stargazers' | 'watchers';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	org?: string;
	organization?: string;
}

export interface UseReposListForksQueryProps extends ReposListForksPathParams {
	queryParams: ReposListForksQueryParams;
}

export function useReposListForksQuery(props: UseReposListForksQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-forks', owner, repo, queryParams]);
}
