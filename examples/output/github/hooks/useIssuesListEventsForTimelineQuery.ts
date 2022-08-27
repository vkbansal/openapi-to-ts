import { useQuery } from '@tanstack/react-query';

export interface IssuesListEventsForTimelinePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListEventsForTimelineQueryParams {
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
	extends IssuesListEventsForTimelinePathParams {
	queryParams: IssuesListEventsForTimelineQueryParams;
}

export function useIssuesListEventsForTimelineQuery(
	props: UseIssuesListEventsForTimelineQueryProps,
) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-events-for-timeline', owner, repo, issue_number, queryParams]);
}
