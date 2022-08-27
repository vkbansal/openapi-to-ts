export interface ReposUpdateCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReposUpdateCommitCommentRequestBody {
	/**
	 * The contents of the comment
	 */
	body: string;
}

export interface ReposUpdateCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposUpdateCommitCommentPathParams {
	body: ReposUpdateCommitCommentRequestBody;
}

export async function reposUpdateCommitComment(props: ReposUpdateCommitCommentProps) {
	const { owner, repo, comment_id, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}`, {
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
