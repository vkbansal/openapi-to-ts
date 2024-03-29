/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesListEventsForRepoQueryPathParams {
	owner: string;
	repo: string;
}

export interface UseIssuesListEventsForRepoQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListEventsForRepoQueryProps
	extends UseIssuesListEventsForRepoQueryPathParams {
	queryParams: UseIssuesListEventsForRepoQueryQueryParams;
}

/**
 *
 */

export function useIssuesListEventsForRepoQuery(props: UseIssuesListEventsForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-events-for-repo', owner, repo, queryParams]);
}
