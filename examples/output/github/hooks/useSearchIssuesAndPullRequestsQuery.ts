import { useQuery } from '@tanstack/react-query';

export interface SearchIssuesAndPullRequestsQueryParams {
	q: string;
	sort?:
		| 'comments'
		| 'created'
		| 'interactions'
		| 'reactions'
		| 'reactions-+1'
		| 'reactions--1'
		| 'reactions-heart'
		| 'reactions-smile'
		| 'reactions-tada'
		| 'reactions-thinking_face'
		| 'updated';
	/**
	 * @default "desc"
	 */
	order?: 'asc' | 'desc';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseSearchIssuesAndPullRequestsQueryProps {
	queryParams: SearchIssuesAndPullRequestsQueryParams;
}

export function useSearchIssuesAndPullRequestsQuery(
	props: UseSearchIssuesAndPullRequestsQueryProps,
) {
	const { queryParams } = props;

	return useQuery(['search/issues-and-pull-requests', queryParams]);
}
