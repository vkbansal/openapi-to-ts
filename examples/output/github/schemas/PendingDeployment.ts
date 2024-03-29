/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { DeploymentReviewerType } from '../schemas/DeploymentReviewerType';

/**
 * Details of a deployment that is waiting for protection rules to pass
 */
export interface PendingDeployment {
	/**
	 * Whether the currently authenticated user can approve the deployment
	 * @example true
	 */
	current_user_can_approve: boolean;
	environment: {
		/**
		 * @example "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging"
		 */
		html_url?: string;
		/**
		 * The id of the environment.
		 * @example 56780428
		 */
		id?: number;
		/**
		 * The name of the environment.
		 * @example "staging"
		 */
		name?: string;
		/**
		 * @example "MDExOkVudmlyb25tZW50NTY3ODA0Mjg="
		 */
		node_id?: string;
		/**
		 * @example "https://api.github.com/repos/github/hello-world/environments/staging"
		 */
		url?: string;
	};
	/**
	 * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
	 */
	reviewers: Array<{
		reviewer?: {};
		type?: DeploymentReviewerType;
	}>;
	/**
	 * The set duration of the wait timer
	 * @example 30
	 */
	wait_timer: number;
	/**
	 * The time that the wait timer began.
	 * @format date-time
	 * @example "2020-11-23T22:00:40Z"
	 */
	wait_timer_started_at: string | null;
}
