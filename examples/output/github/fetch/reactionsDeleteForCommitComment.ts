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

export async function reactionsDeleteForCommitComment(props: ReactionsDeleteForCommitCommentProps) {
	const { owner, repo, comment_id, reaction_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/comments/${comment_id}/reactions/${reaction_id}`,
		{
			method: 'DELETE',
			...rest,
		},
	);

	const json = await response.json();

	return json;
}