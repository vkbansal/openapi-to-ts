/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReposGetCodeFrequencyStatsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetCodeFrequencyStatsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCodeFrequencyStatsPathParams {}

/**
 * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
 */
export async function reposGetCodeFrequencyStats(props: ReposGetCodeFrequencyStatsProps) {
	const { owner, repo, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/stats/code_frequency`,
		method: 'GET',
		...rest,
	});
}
