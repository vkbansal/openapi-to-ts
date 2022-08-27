export interface ReactionsListForCommitCommentQueryParams {
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

export interface ReactionsListForCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReactionsListForCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForCommitCommentPathParams {
	queryParams: ReactionsListForCommitCommentQueryParams;
}

export async function reactionsListForCommitComment(props: ReactionsListForCommitCommentProps) {
	const { owner, repo, comment_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}/reactions`, {
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
