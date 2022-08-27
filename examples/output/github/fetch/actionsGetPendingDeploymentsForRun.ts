export interface ActionsGetPendingDeploymentsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsGetPendingDeploymentsForRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsGetPendingDeploymentsForRunPathParams {}

export async function actionsGetPendingDeploymentsForRun(
	props: ActionsGetPendingDeploymentsForRunProps,
) {
	const { owner, repo, run_id, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/actions/runs/${run_id}/pending_deployments`,
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
