import { SimpleUser } from '../schemas/SimpleUser';
import { Integration } from '../schemas/Integration';
/**
 * The status of a deployment.
 */
export interface DeploymentStatus {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	creator: SimpleUser | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example/deployments/42
  */
	deployment_url: string;
	/**
  * A short description of the status.
  * @example
Deployment finished successfully.
  */
	description: string;
	/**
  * The environment of the deployment that the status is for.
  * @example
production
  */
	environment?: string;
	/**
  * The URL for accessing your environment.
  * @format uri
  * @example
https://staging.example.com/
  */
	environment_url?: string;
	/**
  * @example
1
  */
	id: number;
	/**
  * The URL to associate with this status.
  * @format uri
  * @example
https://example.com/deployment/42/output
  */
	log_url?: string;
	/**
  * @example
MDE2OkRlcGxveW1lbnRTdGF0dXMx
  */
	node_id: string;
	performed_via_github_app?: Integration | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example
  */
	repository_url: string;
	/**
  * The state of the status.
  * @example
success
  */
	state: 'error' | 'failure' | 'in_progress' | 'inactive' | 'pending' | 'queued' | 'success';
	/**
  * Deprecated: the URL to associate with this status.
  * @format uri
  * @example
https://example.com/deployment/42/output
  */
	target_url: string;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example/deployments/42/statuses/1
  */
	url: string;
}
