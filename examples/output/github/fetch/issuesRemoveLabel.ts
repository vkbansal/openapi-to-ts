export interface IssuesRemoveLabelPathParams {
	owner: string;
	repo: string;
	issue_number: number;
	name: string;
}

export interface IssuesRemoveLabelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesRemoveLabelPathParams {}

export async function issuesRemoveLabel(props: IssuesRemoveLabelProps) {
	const { owner, repo, issue_number, name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels/${name}`, {
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
