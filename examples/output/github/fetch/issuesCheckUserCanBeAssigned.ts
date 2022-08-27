/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}
