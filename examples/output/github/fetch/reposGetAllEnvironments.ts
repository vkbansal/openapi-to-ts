export interface ReposGetAllEnvironmentsPathParams {
	owner: string;
	repo: string;
}

export interface ReposGetAllEnvironmentsProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetAllEnvironmentsPathParams {}

export async function reposGetAllEnvironments(props: ReposGetAllEnvironmentsProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/environments`, {
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
