export interface ReactionsCreateForCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsCreateForCommitCommentRequestBody {
	/**
	 * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the commit comment.
	 */
	content: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
}

export interface ReactionsCreateForCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsCreateForCommitCommentPathParams {
	body: ReactionsCreateForCommitCommentRequestBody;
}

export async function reactionsCreateForCommitComment(props: ReactionsCreateForCommitCommentProps) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}/reactions`, {
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
