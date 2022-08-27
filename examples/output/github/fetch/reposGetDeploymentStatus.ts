export interface ReposGetDeploymentStatusPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
	status_id: number;
}

export interface ReposGetDeploymentStatusProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposGetDeploymentStatusPathParams {}

export async function reposGetDeploymentStatus(props: ReposGetDeploymentStatusProps) {
	const { owner, repo, deployment_id, status_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/deployments/${deployment_id}/statuses/${status_id}`,
		{
			method: 'GET',
			...rest,
			headers: {
				'Content-Type': 'application/json',
				...rest.headers,
			},
		},
	);

	const json = await response.json();

	return json;
}
