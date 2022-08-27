export interface IssuesGetPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesGetProps extends Omit<RequestInit, 'method' | 'body'>, IssuesGetPathParams {}

export async function issuesGet(props: IssuesGetProps) {
	const { owner, repo, issue_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}`, {
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
