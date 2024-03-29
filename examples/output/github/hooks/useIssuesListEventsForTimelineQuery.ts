/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface UseIssuesListEventsForTimelineQueryPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface UseIssuesListEventsForTimelineQueryQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListEventsForTimelineQueryProps
	extends UseIssuesListEventsForTimelineQueryPathParams {
	queryParams: UseIssuesListEventsForTimelineQueryQueryParams;
}

/**
 *
 */

export function useIssuesListEventsForTimelineQuery(
	props: UseIssuesListEventsForTimelineQueryProps,
) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-events-for-timeline', owner, repo, issue_number, queryParams]);
}
