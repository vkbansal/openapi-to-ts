export interface IssuesDeleteLabelPathParams {
	owner: string;
	repo: string;
	name: string;
}

export interface IssuesDeleteLabelProps
	extends Omit<RequestInit, 'method' | 'body'>,
		IssuesDeleteLabelPathParams {}

export async function issuesDeleteLabel(props: IssuesDeleteLabelProps) {
	const { owner, repo, name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/labels/${name}`, {
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
