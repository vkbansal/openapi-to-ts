export interface ReactionsListForIssueQueryParams {
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

export interface ReactionsListForIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface ReactionsListForIssueProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReactionsListForIssuePathParams {
	queryParams: ReactionsListForIssueQueryParams;
}

export async function reactionsListForIssue(props: ReactionsListForIssueProps) {
	const { owner, repo, issue_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/reactions`, {
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
