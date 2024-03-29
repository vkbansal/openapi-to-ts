/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface IssuesUnlockPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesUnlockProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUnlockPathParams {}

/**
 * Users with push access can unlock an issue's conversation.
 */
export async function issuesUnlock(props: IssuesUnlockProps) {
	const { owner, repo, issue_number, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/issues/${issue_number}/lock`,
		method: 'DELETE',
		...rest,
	});
}
