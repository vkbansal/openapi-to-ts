import { useQuery } from '@tanstack/react-query';

export interface IssuesListForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListForRepoQueryParams {
	milestone?: string;
	/**
	 * @default "open"
	 */
	state?: 'all' | 'closed' | 'open';
	assignee?: string;
	creator?: string;
	mentioned?: string;
	labels?: string;
	/**
	 * @default "created"
	 */
	sort?: 'comments' | 'created' | 'updated';
	/**
	 * @default "desc"
	 */
	direction?: 'asc' | 'desc';
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

export interface UseIssuesListForRepoQueryProps extends IssuesListForRepoPathParams {
	queryParams: IssuesListForRepoQueryParams;
}

export function useIssuesListForRepoQuery(props: UseIssuesListForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-for-repo', owner, repo, queryParams]);
}
