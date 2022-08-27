export interface ReposDeleteDeploymentPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposDeleteDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposDeleteDeploymentPathParams {}

export async function reposDeleteDeployment(props: ReposDeleteDeploymentProps) {
	const { owner, repo, deployment_id, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments/${deployment_id}`, {
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
