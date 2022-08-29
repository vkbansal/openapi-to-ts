/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { SimpleUser } from '../schemas/SimpleUser';
import { Integration } from '../schemas/Integration';

/**
 * The status of a deployment.
 */
export interface DeploymentStatus {
	/**
	 * @format date-time
	 * @example "2012-07-20T01:19:13Z"
	 */
	created_at: string;
	creator: SimpleUser | null;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/example/deployments/42"
	 */
	deployment_url: string;
	/**
	 * A short description of the status.
	 * @default ""
	 * @example "Deployment finished successfully."
	 */
	description: string;
	/**
	 * The environment of the deployment that the status is for.
	 * @default ""
	 * @example "production"
	 */
	environment?: string;
	/**
	 * The URL for accessing your environment.
	 * @format uri
	 * @default ""
	 * @example "https://staging.example.com/"
	 */
	environment_url?: string;
	/**
	 * @example 1
	 */
	id: number;
	/**
	 * The URL to associate with this status.
	 * @format uri
	 * @default ""
	 * @example "https://example.com/deployment/42/output"
	 */
	log_url?: string;
	/**
	 * @example "MDE2OkRlcGxveW1lbnRTdGF0dXMx"
	 */
	node_id: string;
	performed_via_github_app?: Integration | null;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/example"
	 */
	repository_url: string;
	/**
	 * The state of the status.
	 * @example "success"
	 */
	state: 'error' | 'failure' | 'in_progress' | 'inactive' | 'pending' | 'queued' | 'success';
	/**
	 * Deprecated: the URL to associate with this status.
	 * @format uri
	 * @default ""
	 * @example "https://example.com/deployment/42/output"
	 */
	target_url: string;
	/**
	 * @format date-time
	 * @example "2012-07-20T01:19:13Z"
	 */
	updated_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/repos/octocat/example/deployments/42/statuses/1"
	 */
	url: string;
}
