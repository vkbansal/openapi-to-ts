/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface IssuesRemoveAssigneesPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesRemoveAssigneesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesRemoveAssigneesPathParams {}

/**
 * Removes one or more assignees from an issue.
 */
export async function issuesRemoveAssignees(props: IssuesRemoveAssigneesProps) {
	const { owner, repo, issue_number, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/issues/${issue_number}/assignees`,
		method: 'DELETE',
		...rest,
	});
}
