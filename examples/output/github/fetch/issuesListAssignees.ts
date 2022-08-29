/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface IssuesListAssigneesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListAssigneesPathParams {
	queryParams: IssuesListAssigneesQueryParams;
	paramsSerializer?: (params: IssuesListAssigneesQueryParams) => string;
}

/**
 * Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
 */
export async function issuesListAssignees(props: IssuesListAssigneesProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, IssuesListAssigneesQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/assignees`,
		method: 'GET',
		...rest,
	});
}
