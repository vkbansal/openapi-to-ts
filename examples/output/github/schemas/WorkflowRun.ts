/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { SimpleCommit } from '../schemas/SimpleCommit';
import { MinimalRepository } from '../schemas/MinimalRepository';
import { PullRequestMinimal } from '../schemas/PullRequestMinimal';
import { MinimalRepository } from '../schemas/MinimalRepository';
/**
 * An invocation of a workflow
 */
export interface WorkflowRun {
	/**
	 * The URL to the artifacts for the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5/rerun/artifacts
	 */
	artifacts_url: string;
	/**
	 * The URL to cancel the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5/cancel
	 */
	cancel_url: string;
	/**
	 * The URL to the associated check suite.
	 * @example https://api.github.com/repos/github/hello-world/check-suites/12
	 */
	check_suite_url: string;
	/**
	 * @example neutral
	 */
	conclusion: string | null;
	/**
	 * @format date-time
	 */
	created_at: string;
	/**
	 * @example push
	 */
	event: string;
	/**
	 * @example master
	 */
	head_branch: string | null;
	head_commit: SimpleCommit;
	head_repository: MinimalRepository;
	/**
	 * @example 5
	 */
	head_repository_id?: number;
	/**
	 * The SHA of the head commit that points to the version of the worflow being run.
	 * @example 009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d
	 */
	head_sha: string;
	/**
	 * @example https://github.com/github/hello-world/suites/4
	 */
	html_url: string;
	/**
	 * The ID of the workflow run.
	 * @example 5
	 */
	id: number;
	/**
	 * The URL to the jobs for the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5/jobs
	 */
	jobs_url: string;
	/**
	 * The URL to download the logs for the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5/logs
	 */
	logs_url: string;
	/**
	 * The name of the workflow run.
	 * @example Build
	 */
	name?: string;
	/**
	 * @example MDEwOkNoZWNrU3VpdGU1
	 */
	node_id: string;
	pull_requests: PullRequestMinimal[] | null;
	repository: MinimalRepository;
	/**
	 * The URL to rerun the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5/rerun
	 */
	rerun_url: string;
	/**
	 * The auto incrementing run number for the workflow run.
	 * @example 106
	 */
	run_number: number;
	/**
	 * @example completed
	 */
	status: string | null;
	/**
	 * @format date-time
	 */
	updated_at: string;
	/**
	 * The URL to the workflow run.
	 * @example https://api.github.com/repos/github/hello-world/actions/runs/5
	 */
	url: string;
	/**
	 * The ID of the parent workflow.
	 * @example 5
	 */
	workflow_id: number;
	/**
	 * The URL to the workflow.
	 * @example https://api.github.com/repos/github/hello-world/actions/workflows/main.yaml
	 */
	workflow_url: string;
}
