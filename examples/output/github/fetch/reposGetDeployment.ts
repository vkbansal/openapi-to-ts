export interface ReposGetDeploymentPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposGetDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetDeploymentPathParams {}

export async function reposGetDeployment(props: ReposGetDeploymentProps) {
	const { owner, repo, deployment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments/${deployment_id}`, {
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
