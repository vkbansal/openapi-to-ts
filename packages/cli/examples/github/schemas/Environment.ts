import { DeploymentBranchPolicy } from '../schemas/DeploymentBranchPolicy';
/**
 * Details of a deployment environment
 */
export interface Environment {
	/**
  * The time that the environment was created, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	deployment_branch_policy?: DeploymentBranchPolicy;
	/**
  * @example
https://github.com/github/hello-world/deployments/activity_log?environments_filter=staging
  */
	html_url: string;
	/**
  * The id of the environment.
  * @example
56780428
  */
	id: number;
	/**
  * The name of the environment.
  * @example
staging
  */
	name: string;
	/**
  * @example
MDExOkVudmlyb25tZW50NTY3ODA0Mjg=
  */
	node_id: string;
	protection_rules?: Array<{}>;
	/**
  * The time that the environment was last updated, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @example
https://api.github.com/repos/github/hello-world/environments/staging
  */
	url: string;
}
