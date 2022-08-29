/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetTopReferrersPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetTopReferrersProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetTopReferrersPathParams {}

/**
 * Get the top 10 referrers over the last 14 days.
 */
export async function reposGetTopReferrers(props: ReposGetTopReferrersProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/traffic/popular/referrers`,
		method: 'GET',
		...rest,
	});
}
