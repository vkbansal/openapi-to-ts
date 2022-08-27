export interface ReposListDeploymentStatusesQueryParams {
	/**
	 * @default 30
	 */
	per_page?: number;
	/**
	 * @default 1
	 */
	page?: number;
}

export interface ReposListDeploymentStatusesPathParams {
	owner: string;
	repo: string;
	deployment_id: number;
}

export interface ReposListDeploymentStatusesProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposListDeploymentStatusesPathParams {
	queryParams: ReposListDeploymentStatusesQueryParams;
}

export async function reposListDeploymentStatuses(props: ReposListDeploymentStatusesProps) {
	const { owner, repo, deployment_id, queryParams, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments/${deployment_id}/statuses`, {
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
