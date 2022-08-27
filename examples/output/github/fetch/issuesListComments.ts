export interface IssuesListCommentsQueryParams {
	since?: string;
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListCommentsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListCommentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListCommentsPathParams {
	queryParams: IssuesListCommentsQueryParams;
}

export async function issuesListComments(props: IssuesListCommentsProps) {
	const { owner, repo, issue_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/comments`, {
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
