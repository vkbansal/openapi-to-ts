export interface IssuesGetLabelPathParams {
	owner: string;
	repo: string;
	name: string;
}

export interface IssuesGetLabelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesGetLabelPathParams {}

export async function issuesGetLabel(props: IssuesGetLabelProps) {
	const { owner, repo, name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels/${name}`, {
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
