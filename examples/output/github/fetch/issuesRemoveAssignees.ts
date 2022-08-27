export interface IssuesRemoveAssigneesPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesRemoveAssigneesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesRemoveAssigneesPathParams {}

export async function issuesRemoveAssignees(props: IssuesRemoveAssigneesProps) {
	const { owner, repo, issue_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/assignees`, {
		method: 'DELETE',
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
