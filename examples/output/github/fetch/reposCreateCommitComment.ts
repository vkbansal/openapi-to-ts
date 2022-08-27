export interface ReposCreateCommitCommentPathParams {
	owner: string;
	repo: string;
	commit_sha: string;
}

export interface ReposCreateCommitCommentRequestBody {
	/**
	 * The contents of the comment.
	 */
	body: string;
	/**
	 * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
	 */
	line?: number;
	/**
	 * Relative path of the file to comment on.
	 */
	path?: string;
	/**
	 * Line index in the diff to comment on.
	 */
	position?: number;
}

export interface ReposCreateCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateCommitCommentPathParams {
	body: ReposCreateCommitCommentRequestBody;
}

export async function reposCreateCommitComment(props: ReposCreateCommitCommentProps) {
	const { owner, repo, commit_sha, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/commits/${commit_sha}/comments`, {
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
