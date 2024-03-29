/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

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

export interface IssuesListEventsForRepoProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListEventsForRepoPathParams {
	queryParams: IssuesListEventsForRepoQueryParams;
	paramsSerializer?: (params: IssuesListEventsForRepoQueryParams) => string;
}

/**
 *
 */
export async function issuesListEventsForRepo(props: IssuesListEventsForRepoProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, IssuesListEventsForRepoQueryParams, unknown>({
		path: `/repos/${owner}/${repo}/issues/events`,
		method: 'GET',
		...rest,
	});
}
