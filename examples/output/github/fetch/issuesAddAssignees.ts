export interface IssuesAddAssigneesPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesAddAssigneesRequestBody {
	/**
	 * Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
	 */
	assignees?: string[];
}

export interface IssuesAddAssigneesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesAddAssigneesPathParams {
	body: IssuesAddAssigneesRequestBody;
}

export async function issuesAddAssignees(props: IssuesAddAssigneesProps) {
	const { owner, repo, issue_number, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/assignees`, {
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
