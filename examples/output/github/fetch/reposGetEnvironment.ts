export interface ReposGetEnvironmentPathParams {
	owner: string;
	repo: string;
	environment_name: string;
}

export interface ReposGetEnvironmentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetEnvironmentPathParams {}

export async function reposGetEnvironment(props: ReposGetEnvironmentProps) {
	const { owner, repo, environment_name, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/environments/${environment_name}`, {
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
