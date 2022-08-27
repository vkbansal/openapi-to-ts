import { useQuery } from '@tanstack/react-query';

export interface ReposListTagsPathParams {
	owner: string;
	repo: string;
}

export interface ReposListTagsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseReposListTagsQueryProps extends ReposListTagsPathParams {
	queryParams: ReposListTagsQueryParams;
}

export function useReposListTagsQuery(props: UseReposListTagsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/list-tags', owner, repo, queryParams]);
}
