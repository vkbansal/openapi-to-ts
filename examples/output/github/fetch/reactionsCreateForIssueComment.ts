export interface ReactionsCreateForIssueCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsCreateForIssueCommentRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue comment.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForIssueCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForIssueCommentPathParams {
	body: ReactionsCreateForIssueCommentRequestBody;
}

export async function reactionsCreateForIssueComment(props: ReactionsCreateForIssueCommentProps) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments/${comment_id}/reactions`, {
		method: 'POST',
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
