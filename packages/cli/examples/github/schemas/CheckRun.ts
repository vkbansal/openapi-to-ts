import { Integration } from '../schemas/Integration';
import { DeploymentSimple } from '../schemas/DeploymentSimple';
/**
 * A check performed on the code of a given code change
 */
export interface CheckRun {
	app: Integration | null;
	check_suite: {
		id: number;
	} | null;
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	completed_at: string | null;
	/**
  * @example
neutral
  */
	conclusion:
		| 'action_required'
		| 'cancelled'
		| 'failure'
		| 'neutral'
		| 'skipped'
		| 'success'
		| 'timed_out'
		| null;
	deployment?: DeploymentSimple;
	/**
  * @example
https://example.com
  */
	details_url: string | null;
	/**
  * @example
42
  */
	external_id: string | null;
	/**
  * The SHA of the commit that is being checked.
  * @example
009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d
  */
	head_sha: string;
	/**
  * @example
https://github.com/github/hello-world/runs/4
  */
	html_url: string | null;
	/**
  * The id of the check.
  * @example
21
  */
	id: number;
	/**
  * The name of the check.
  * @example
test-coverage
  */
	name: string;
	/**
  * @example
MDg6Q2hlY2tSdW40
  */
	node_id: string;
	output: {
		annotations_count: number;
		/**
		 * @format uri
		 */
		annotations_url: string;
		summary: string | null;
		text: string | null;
		title: string | null;
	};
	pull_requests: {};
	/**
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	started_at: string | null;
	/**
  * The phase of the lifecycle that the check is currently in.
  * @example
queued
  */
	status: 'completed' | 'in_progress' | 'queued';
	/**
  * @example
https://api.github.com/repos/github/hello-world/check-runs/4
  */
	url: string;
}
