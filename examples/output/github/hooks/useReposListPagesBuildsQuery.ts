import { useQuery } from '@tanstack/react-query';

export interface ReposListPagesBuildsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListPagesBuildsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListPagesBuildsQueryProps extends ReposListPagesBuildsPathParams {
	queryParams: ReposListPagesBuildsQueryParams;
}

export function useReposListPagesBuildsQuery(props: UseReposListPagesBuildsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-pages-builds', owner, repo, queryParams]);
}
