export interface ReposGetCommitCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface ReposGetCommitCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetCommitCommentPathParams {}

export async function reposGetCommitComment(props: ReposGetCommitCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/comments/${comment_id}`, {
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
