export interface ActionsReviewPendingDeploymentsForRunPathParams {
	owner: string;
	repo: string;
	run_id: number;
}

export interface ActionsReviewPendingDeploymentsForRunRequestBody {
	/**
	 * A comment to accompany the deployment review
	 * @example "Ship it!"
	 */
	comment: string;
	/**
	 * The list of environment ids to approve or reject
	 * @example [161171787,161171795]
	 */
	environment_ids: number[];
	/**
	 * Whether to approve or reject deployment to the specified environments. Must be one of: `approved` or `rejected`
	 * @example "approved"
	 */
	state: 'approved' | 'rejected';
}

export interface ActionsReviewPendingDeploymentsForRunProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ActionsReviewPendingDeploymentsForRunPathParams {
	body: ActionsReviewPendingDeploymentsForRunRequestBody;
}

export async function actionsReviewPendingDeploymentsForRun(
	props: ActionsReviewPendingDeploymentsForRunProps,
) {
	const { owner, repo, run_id, body, ...rest } = props;

	const response = await fetch(
		`/repos/${owner}/${repo}/actions/runs/${run_id}/pending_deployments`,
		{
			method: 'POST',
			body: JSON.stringify(body),
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
