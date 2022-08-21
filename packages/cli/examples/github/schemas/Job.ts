/**
 * Information of a job execution in a workflow run
 */
export interface Job {
	/**
  * @example
https://api.github.com/repos/github/hello-world/check-runs/4
  */
	check_run_url: string;
	/**
  * The time that the job finished, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	completed_at: string | null;
	/**
  * The outcome of the job.
  * @example
success
  */
	conclusion: string | null;
	/**
  * The SHA of the commit that is being run.
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
  * The id of the job.
  * @example
21
  */
	id: number;
	/**
  * The name of the job.
  * @example
test-coverage
  */
	name: string;
	/**
  * @example
MDg6Q2hlY2tSdW40
  */
	node_id: string;
	/**
  * The id of the associated workflow run.
  * @example
5
  */
	run_id: number;
	/**
  * @example
https://api.github.com/repos/github/hello-world/actions/runs/5
  */
	run_url: string;
	/**
  * The time that the job started, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	started_at: string;
	/**
  * The phase of the lifecycle that the job is currently in.
  * @example
queued
  */
	status: 'completed' | 'in_progress' | 'queued';
	/**
	 * Steps in this job.
	 */
	steps?: Array<{
		/**
  * The time that the job finished, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		completed_at?: string | null;
		/**
  * The outcome of the job.
  * @example
success
  */
		conclusion: string | null;
		/**
  * The name of the job.
  * @example
test-coverage
  */
		name: string;
		/**
  * @example
1
  */
		number: number;
		/**
  * The time that the step started, in ISO 8601 format.
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		started_at?: string | null;
		/**
  * The phase of the lifecycle that the job is currently in.
  * @example
queued
  */
		status: 'completed' | 'in_progress' | 'queued';
	}>;
	/**
  * @example
https://api.github.com/repos/github/hello-world/actions/jobs/21
  */
	url: string;
}
