import { useQuery } from '@tanstack/react-query';

export interface IssuesListCommentsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListCommentsQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListCommentsQueryProps extends IssuesListCommentsPathParams {
	queryParams: IssuesListCommentsQueryParams;
}

export function useIssuesListCommentsQuery(props: UseIssuesListCommentsQueryProps) {
	const { owner, repo, issue_number, queryParams } = props;

	return useQuery(['issues/list-comments', owner, repo, issue_number, queryParams]);
}
