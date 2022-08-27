export interface IssuesDeleteCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface IssuesDeleteCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesDeleteCommentPathParams {}

export async function issuesDeleteComment(props: IssuesDeleteCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments/${comment_id}`, {
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
