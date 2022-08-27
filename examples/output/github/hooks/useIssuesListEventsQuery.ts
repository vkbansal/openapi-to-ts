import { useQuery } from '@tanstack/react-query';

export interface IssuesListEventsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListEventsQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListEventsQueryProps extends IssuesListEventsPathParams {
	queryParams: IssuesListEventsQueryParams;
}

export function useIssuesListEventsQuery(props: UseIssuesListEventsQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-events', owner, repo, issue_number, queryParams]);
}
