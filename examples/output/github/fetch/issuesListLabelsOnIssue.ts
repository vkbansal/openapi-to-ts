export interface IssuesListLabelsOnIssueQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface IssuesListLabelsOnIssuePathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesListLabelsOnIssueProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesListLabelsOnIssuePathParams {
	queryParams: IssuesListLabelsOnIssueQueryParams;
}

export async function issuesListLabelsOnIssue(props: IssuesListLabelsOnIssueProps) {
	const { owner, repo, issue_number, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels`, {
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
