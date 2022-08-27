/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	order?: 'asc' | 'desc';
	per_page?: number;
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