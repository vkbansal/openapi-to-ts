export interface IssuesRemoveAllLabelsPathParams {
	owner: string;
	repo: string;
	issue_number: number;
}

export interface IssuesRemoveAllLabelsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesRemoveAllLabelsPathParams {}

export async function issuesRemoveAllLabels(props: IssuesRemoveAllLabelsProps) {
	const { owner, repo, issue_number, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/issues/${issue_number}/labels`, {
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
