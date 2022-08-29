/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface PullsCheckIfMergedPathParams {
	owner: string;
	repo: string;
	pull_number: number;
}

export interface PullsCheckIfMergedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		PullsCheckIfMergedPathParams {}

/**
 *
 */
export async function pullsCheckIfMerged(props: PullsCheckIfMergedProps) {
	const { owner, repo, pull_number, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/pulls/${pull_number}/merge`,
		method: 'GET',
		...rest,
	});
}
