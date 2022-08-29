/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

import { fetcher as _fetcher } from './fetcher';

export interface ReactionsDeleteForIssueCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
	reaction_id: number;
}

export interface ReactionsDeleteForIssueCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForIssueCommentPathParams {}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
 *
 * Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
 */
export async function reactionsDeleteForIssueComment(props: ReactionsDeleteForIssueCommentProps) {
	const { owner, repo, comment_id, reaction_id, ...rest } = props;

	return _fetcher<unknown, unknown, unknown>({
		path: `/repos/${owner}/${repo}/issues/comments/${comment_id}/reactions/${reaction_id}`,
		method: 'DELETE',
		...rest,
	});
}
