import { SimpleUser } from '../schemas/SimpleUser';
import { Integration } from '../schemas/Integration';
/**
 * A request for a specific ref(branch,sha,tag) to be deployed
 */
export interface Deployment {
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	created_at: string;
	creator: SimpleUser | null;
	/**
  * @example
Deploy request from hubot
  */
	description: string | null;
	/**
  * Name for the target deployment environment.
  * @example
production
  */
	environment: string;
	/**
  * Unique identifier of the deployment
  * @example
42
  */
	id: number;
	/**
  * @example
MDEwOkRlcGxveW1lbnQx
  */
	node_id: string;
	/**
  * @example
staging
  */
	original_environment?: string;
	payload: {};
	performed_via_github_app?: Integration | null;
	/**
  * Specifies if the given environment is one that end-users directly interact with. Default: false.
  * @example
true
  */
	production_environment?: boolean;
	/**
  * The ref to deploy. This can be a branch, tag, or sha.
  * @example
topic-branch
  */
	ref: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example
  */
	repository_url: string;
	/**
  * @example
a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d
  */
	sha: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example/deployments/1/statuses
  */
	statuses_url: string;
	/**
  * Parameter to specify a task to execute
  * @example
deploy
  */
	task: string;
	/**
  * Specifies if the given environment is will no longer exist at some point in the future. Default: false.
  * @example
true
  */
	transient_environment?: boolean;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	updated_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/example/deployments/1
  */
	url: string;
}
