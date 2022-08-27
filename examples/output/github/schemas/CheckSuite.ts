/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { Integration } from '../schemas/Integration';
import { SimpleCommit } from '../schemas/SimpleCommit';
import { PullRequestMinimal } from '../schemas/PullRequestMinimal';
import { MinimalRepository } from '../schemas/MinimalRepository';

/**
 * A suite of checks performed on the code of a given code change
 */
export interface CheckSuite {
	/**
	 * @example "d6fde92930d4715a2b49857d24b940956b26d2d3"
	 */
	after: string | null;
	app: Integration | null;
	/**
	 * @example "146e867f55c26428e5f9fade55a9bbf5e95a7912"
	 */
	before: string | null;
	check_runs_url: string;
	/**
	 * @example "neutral"
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
	/**
	 * @format date-time
	 */
	created_at: string | null;
	/**
	 * @example "master"
	 */
	head_branch: string | null;
	head_commit: SimpleCommit;
	/**
	 * The SHA of the head commit that is being checked.
	 * @example "009b8a3a9ccbb128af87f9b1c0f4c62e8a304f6d"
	 */
	head_sha: string;
	/**
	 * @example 5
	 */
	id: number;
	latest_check_runs_count: number;
	/**
	 * @example "MDEwOkNoZWNrU3VpdGU1"
	 */
	node_id: string;
	pull_requests: PullRequestMinimal[] | null;
	repository: MinimalRepository;
	/**
	 * @example "completed"
	 */
	status: 'completed' | 'in_progress' | 'queued' | null;
	/**
	 * @format date-time
	 */
	updated_at: string | null;
	/**
	 * @example "https://api.github.com/repos/github/hello-world/check-suites/5"
	 */
	url: string | null;
}
