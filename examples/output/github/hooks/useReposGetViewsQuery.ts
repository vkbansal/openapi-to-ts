import { useQuery } from '@tanstack/react-query';

export interface ReposGetViewsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetViewsQueryParams {
	/**
	 * @default "day"
	 */
	per?: '' | 'day' | 'week';
}

export interface UseReposGetViewsQueryProps extends ReposGetViewsPathParams {
	queryParams: ReposGetViewsQueryParams;
}

export function useReposGetViewsQuery(props: UseReposGetViewsQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['repos/get-views', owner, repo, queryParams]);
}
