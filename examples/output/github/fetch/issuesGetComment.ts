/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface IssuesGetCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface IssuesGetCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesGetCommentPathParams {}

/**
 *
 */
export async function issuesGetComment(props: IssuesGetCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/issues/comments/${comment_id}`,
		method: 'GET',
		...rest,
	});
}
