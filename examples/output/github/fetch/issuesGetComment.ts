export interface IssuesGetCommentPathParams {
	owner: string;
	repo: string;
	comment_id: number;
}

export interface IssuesGetCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesGetCommentPathParams {}

export async function issuesGetComment(props: IssuesGetCommentProps) {
	const { owner, repo, comment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/comments/${comment_id}`, {
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
