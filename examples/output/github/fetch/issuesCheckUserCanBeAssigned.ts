export interface IssuesCheckUserCanBeAssignedPathParams {
	owner: string;
	repo: string;
	assignee: string;
}

export interface IssuesCheckUserCanBeAssignedProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesCheckUserCanBeAssignedPathParams {}

export async function issuesCheckUserCanBeAssigned(props: IssuesCheckUserCanBeAssignedProps) {
	const { owner, repo, assignee, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/assignees/${assignee}`, {
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
