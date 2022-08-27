/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
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
	});

	const json = await response.json();

	return json;
}