/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useQuery } from '@tanstack/react-query';

export interface IssuesListAssigneesPathParams {
	owner: string;
	repo: string;
}

export interface IssuesListAssigneesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface UseIssuesListAssigneesQueryProps extends IssuesListAssigneesPathParams {
	queryParams: IssuesListAssigneesQueryParams;
}

/**
 * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
 */

export function useIssuesListAssigneesQuery(props: UseIssuesListAssigneesQueryProps) {
	const { owner, repo, queryParams } = props;

	return useQuery(['issues/list-assignees', owner, repo, queryParams]);
}
