export interface ReposCreateOrUpdateEnvironmentPathParams {
	owner: string;
	repo: string;
	environment_name: string;
}

export interface ReposCreateOrUpdateEnvironmentRequestBody {
	deployment_branch_policy?: DeploymentBranchPolicy;
	/**
	 * The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
	 */
	reviewers?: Array<{
		/**
		 * The id of the user or team who can review the deployment
		 * @example 4532992
		 */
		id?: number;
		type?: DeploymentReviewerType;
	}> | null;
	wait_timer?: WaitTimer;
}

export interface ReposCreateOrUpdateEnvironmentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateOrUpdateEnvironmentPathParams {
	body: ReposCreateOrUpdateEnvironmentRequestBody;
}

export async function reposCreateOrUpdateEnvironment(props: ReposCreateOrUpdateEnvironmentProps) {
	const { owner, repo, environment_name, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/environments/${environment_name}`, {
		method: 'PUT',
		body: JSON.stringify(body),
		...rest,
		headers: {
			'Content-Type': 'application/json',
			...rest.headers,
		},
	});

	const json = await response.json();

	return json;
}
