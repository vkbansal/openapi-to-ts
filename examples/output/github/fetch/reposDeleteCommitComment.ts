export interface ReposDeleteCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReposDeleteCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteCommitCommentPathParams {}

export async function reposDeleteCommitComment(props: ReposDeleteCommitCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
