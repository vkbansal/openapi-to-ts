/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesListEventsQueryPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface UseIssuesListEventsQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListEventsQueryProps extends UseIssuesListEventsQueryPathParams {
	queryParams: UseIssuesListEventsQueryQueryParams;
}

/**
 *
 */

export function useIssuesListEventsQuery(props: UseIssuesListEventsQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-events', owner, repo, issue_number, queryParams]);
}
