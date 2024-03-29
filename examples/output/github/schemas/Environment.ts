/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { DeploymentBranchPolicy } from '../schemas/DeploymentBranchPolicy';

/**
 * Details of a deployment environment
 */
export interface Environment {
	/**
	 * The time that the environment was created, in ISO 8601 format.
	 * @format date-time
	 * @example "2020-11-23T22:00:40Z"
	 */
	created_at: string;
	deployment_branch_policy?: DeploymentBranchPolicy;
	/**
	 * @example "https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging"
	 */
	html_url: string;
	/**
	 * The id of the environment.
	 * @example 56780428
	 */
	id: number;
	/**
	 * The name of the environment.
	 * @example "staging"
	 */
	name: string;
	/**
	 * @example "MDExOkVudmlyb25tZW50NTY3ODA0Mjg="
	 */
	node_id: string;
	protection_rules?: Array<{}>;
	/**
	 * The time that the environment was last updated, in ISO 8601 format.
	 * @format date-time
	 * @example "2020-11-23T22:00:40Z"
	 */
	updated_at: string;
	/**
	 * @example "https://api.github.com/repos/github/hello-world/environments/staging"
	 */
	url: string;
}
