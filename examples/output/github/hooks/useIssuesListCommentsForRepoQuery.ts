/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';
export interface IssuesListCommentsForRepoPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListCommentsForRepoQueryParams {
	sort?: 'created' | 'updated';
	direction?: 'asc' | 'desc';
	since?: string;
	per_page?: number;
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
