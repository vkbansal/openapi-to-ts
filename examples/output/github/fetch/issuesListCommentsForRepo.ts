/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface IssuesListCommentsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListCommentsForRepoPathParams {
	queryParams: IssuesListCommentsForRepoQueryParams;
	paramsSerializer?: (params: IssuesListCommentsForRepoQueryParams) => string;
}

/**
 * By default, Issue Comments are ordered by ascending ID.
 */
export async function issuesListCommentsForRepo(props: IssuesListCommentsForRepoProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, IssuesListCommentsForRepoQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/issues/comments`,
		method: 'GET',
		...rest,
	});
}
