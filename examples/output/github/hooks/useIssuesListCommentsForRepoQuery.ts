import { useQuery } from '@tanstack/react-query';

export interface IssuesListCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListCommentsForRepoQueryParams {
	/**
	 * @default "created"
	 */
	sort?: 'created' | 'updated';
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

export interface UseIssuesListCommentsForRepoQueryProps
	extends IssuesListCommentsForRepoPathParams {
	queryParams: IssuesListCommentsForRepoQueryParams;
}

export function useIssuesListCommentsForRepoQuery(props: UseIssuesListCommentsForRepoQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-comments-for-repo', owner, repo, queryParams]);
}
