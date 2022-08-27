export interface ReactionsListForIssueCommentQueryParams {
	content?: '+1' | '-1' | 'confused' | 'eyes' | 'heart' | 'hooray' | 'laugh' | 'rocket';
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReactionsListForIssueCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForIssueCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForIssueCommentPathParams {
	queryParams: ReactionsListForIssueCommentQueryParams;
}

export async function reactionsListForIssueComment(props: ReactionsListForIssueCommentProps) {
	const { owner, repo, comment_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments/${comment_id}/reactions`, {
		method: 'GET',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
