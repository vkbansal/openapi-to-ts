/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import type { SimpleUser } from '../schemas/SimpleUser';

/**
 * Gist Commit
 */
export interface GistCommit {
	change_status: {
		additions?: number;
		deletions?: number;
		total?: number;
	};
	/**
	 * @format date-time
	 * @example "2010-04-14T02:15:15Z"
	 */
	committed_at: string;
	/**
	 * @format uri
	 * @example "https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f"
	 */
	url: string;
	user: SimpleUser | null;
	/**
	 * @example "57a7f021a713b1c5a6a199b54cc514735d2d462f"
	 */
	version: string;
}
