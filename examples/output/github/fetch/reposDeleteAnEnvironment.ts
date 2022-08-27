export interface ReposDeleteAnEnvironmentPathParams {
	owner: string;
	repo: string;
	environment_name: string;
}

export interface ReposDeleteAnEnvironmentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteAnEnvironmentPathParams {}

export async function reposDeleteAnEnvironment(props: ReposDeleteAnEnvironmentProps) {
	const { owner, repo, environment_name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/environments/${environment_name}`, {
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
