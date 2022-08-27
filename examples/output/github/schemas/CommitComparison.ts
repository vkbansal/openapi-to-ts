/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { Commit } from '../schemas/Commit';
import { Commit } from '../schemas/Commit';
import { DiffEntry } from '../schemas/DiffEntry';
import { Commit } from '../schemas/Commit';
/**
 * Commit Comparison
 */
export interface CommitComparison {
	/**
	 * @example 4
	 */
	ahead_by: number;
	base_commit: Commit;
	/**
	 * @example 5
	 */
	behind_by: number;
	commits: Commit[];
	/**
	 * @format uri
	 * @example https://github.com/octocat/Hello-World/compare/master...topic.diff
	 */
	diff_url: string;
	files: DiffEntry[];
	/**
	 * @format uri
	 * @example https://github.com/octocat/Hello-World/compare/master...topic
	 */
	html_url: string;
	merge_base_commit: Commit;
	/**
	 * @format uri
	 * @example https://github.com/octocat/Hello-World/compare/master...topic.patch
	 */
	patch_url: string;
	/**
	 * @format uri
	 * @example https://github.com/octocat/Hello-World/compare/octocat:bbcd538c8e72b8c175046e27cc8f907076331401...octocat:0328041d1152db8ae77652d1618a02e57f745f17
	 */
	permalink_url: string;
	/**
	 * @example ahead
	 */
	status: 'ahead' | 'behind' | 'diverged' | 'identical';
	/**
	 * @example 6
	 */
	total_commits: number;
	/**
	 * @format uri
	 * @example https://api.github.com/repos/octocat/Hello-World/compare/master...topic
	 */
	url: string;
}