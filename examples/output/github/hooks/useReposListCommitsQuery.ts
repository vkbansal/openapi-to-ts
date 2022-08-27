import { useQuery } from '@tanstack/react-query';

export interface ReposListCommitsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListCommitsQueryParams {
	sha?: string;
	path?: string;
	author?: string;
	since?: string;
	until?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
	top?: string;
	last_sha?: string;
}

export interface UseReposListCommitsQueryProps extends ReposListCommitsPathParams {
	queryParams: ReposListCommitsQueryParams;
}

export function useReposListCommitsQuery(props: UseReposListCommitsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-commits', owner, repo, queryParams]);
}
