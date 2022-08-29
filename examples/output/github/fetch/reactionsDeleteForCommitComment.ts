/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

export interface ReactionsDeleteForCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
	reaction_id: number;
}

export interface ReactionsDeleteForCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsDeleteForCommitCommentPathParams {}

/**
 * **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
 *
 * Delete a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
 */
export async function reactionsDeleteForCommitComment(props: ReactionsDeleteForCommitCommentProps) {
	const { owner, repo, comment_id, reaction_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/comments/${comment_id}/reactions/${reaction_id}`,
		{
			method: 'DELETE',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
