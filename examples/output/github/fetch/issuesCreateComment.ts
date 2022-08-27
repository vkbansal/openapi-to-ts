export interface IssuesCreateCommentPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesCreateCommentRequestBody {
	/**
	 * The contents of the comment.
	 */
	body: string;
}

export interface IssuesCreateCommentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCreateCommentPathParams {
	body: IssuesCreateCommentRequestBody;
}

export async function issuesCreateComment(props: IssuesCreateCommentProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/comments`, {
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
