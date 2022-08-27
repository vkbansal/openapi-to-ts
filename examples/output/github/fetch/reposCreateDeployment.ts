export interface ReposCreateDeploymentPathParams {
	owner: string;
	repo: string;
}

export interface ReposCreateDeploymentRequestBody {
	/**
	 * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
	 * @default true
	 */
	auto_merge?: boolean;
	/**
	 * @example "\"1776-07-04T00:00:00.000-07:52\""
	 */
	created_at?: string;
	/**
	 * Short description of the deployment.
	 * @default ""
	 */
	description?: string | null;
	/**
	 * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
	 * @default "production"
	 */
	environment?: string;
	payload?: { '[key: string]'?: any } & string;
	/**
	 * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.
	 * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
	 */
	production_environment?: boolean;
	/**
	 * The ref to deploy. This can be a branch, tag, or SHA.
	 */
	ref: string;
	/**
	 * The [status](https://docs.github.com/rest/reference/repos#statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
	 */
	required_contexts?: string[];
	/**
	 * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
	 * @default "deploy"
	 */
	task?: string;
	/**
	 * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`
	 * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type. **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/rest/overview/api-previews#enhanced-deployments) custom media type.
	 */
	transient_environment?: boolean;
}

export interface ReposCreateDeploymentProps
	extends Omit<RequestInit, 'method' | 'body'>,
		ReposCreateDeploymentPathParams {
	body: ReposCreateDeploymentRequestBody;
}

export async function reposCreateDeployment(props: ReposCreateDeploymentProps) {
	const { owner, repo, body, ...rest } = props;

	const response = await fetch(`/repos/${owner}/${repo}/deployments`, {
		method: 'POST',
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
