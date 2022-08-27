export interface IssuesUpdateCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface IssuesUpdateCommentRequestBody {
	/**
	 * The contents of the comment.
	 */
	body: string;
}

export interface IssuesUpdateCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesUpdateCommentPathParams {
	body: IssuesUpdateCommentRequestBody;
}

export async function issuesUpdateComment(props: IssuesUpdateCommentProps) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments/${comment_id}`, {
		method: 'PATCH',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
