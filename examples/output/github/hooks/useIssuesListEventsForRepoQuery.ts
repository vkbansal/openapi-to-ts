import { useQuery } from '@tanstack/react-query';

export interface IssuesListEventsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListEventsForRepoQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListEventsForRepoQueryProps extends IssuesListEventsForRepoPathParams {
	queryParams: IssuesListEventsForRepoQueryParams;
}

export function useIssuesListEventsForRepoQuery(props: UseIssuesListEventsForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-events-for-repo', owner, repo, queryParams]);
}
