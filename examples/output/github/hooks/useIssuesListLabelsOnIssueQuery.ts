import { useQuery } from '@tanstack/react-query';

export interface IssuesListLabelsOnIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListLabelsOnIssueQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListLabelsOnIssueQueryProps extends IssuesListLabelsOnIssuePathParams {
	queryParams: IssuesListLabelsOnIssueQueryParams;
}

export function useIssuesListLabelsOnIssueQuery(props: UseIssuesListLabelsOnIssueQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-labels-on-issue', owner, repo, issue_number, queryParams]);
}
