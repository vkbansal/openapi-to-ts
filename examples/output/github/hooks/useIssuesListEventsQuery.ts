/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface IssuesListEventsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListEventsQueryParams {
	per_page?: number;
	page?: number;
}

export interface UseIssuesListEventsQueryProps extends IssuesListEventsPathParams {
	queryParams: IssuesListEventsQueryParams;
}

export function useIssuesListEventsQuery(props: UseIssuesListEventsQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-events', owner, repo, issue_number, queryParams]);
}