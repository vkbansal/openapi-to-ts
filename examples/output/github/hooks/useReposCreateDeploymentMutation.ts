/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { useMutation } from '@tanstack/react-query';

export interface UseReposCreateDeploymentMutationPathParams {
	owner: string;
	repo: string;
}

export interface UseReposCreateDeploymentMutationRequestBody {
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

export interface UseReposCreateDeploymentMutationProps
	extends UseReposCreateDeploymentMutationPathParams {
	body: UseReposCreateDeploymentMutationRequestBody;
}

/**
 * Deployments offer a few configurable parameters with certain defaults.
 *
 * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
 * before we merge a pull request.
 *
 * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
 * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
 * makes it easier to track which environments have requested deployments. The default environment is `production`.
 *
 * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
 * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
 * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
 * return a failure response.
 *
 * By default, [commit statuses](https://docs.github.com/rest/reference/repos#statuses) for every submitted context must be in a `success`
 * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
 * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
 * not require any contexts or create any commit statuses, the deployment will always succeed.
 *
 * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
 * field that will be passed on when a deployment event is dispatched.
 *
 * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
 * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
 * application with debugging enabled.
 *
 * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
 *
 * #### Merged branch response
 * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
 * a deployment. This auto-merge happens when:
 * *   Auto-merge option is enabled in the repository
 * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
 * *   There are no merge conflicts
 *
 * If there are no new commits in the base branch, a new request to create a deployment should give a successful
 * response.
 *
 * #### Merge conflict response
 * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
 * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
 *
 * #### Failed commit status checks
 * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
 * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
 */

export function useReposCreateDeploymentMutation(props: UseReposCreateDeploymentMutationProps) {
	return useMutation(() => Promise.resolve());
}
