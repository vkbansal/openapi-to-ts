/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
export interface ReposCreateDeploymentPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateDeploymentPathParams {}

export async function reposCreateDeployment(props: ReposCreateDeploymentProps) {
	const { owner, repo, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments`, {
		method: 'POST',
		...rest,
	});

	const json = await response.json();

	return json;
}