import { SimpleUser } from '../schemas/SimpleUser';
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
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
	committed_at: string;
	/**
  * @format uri
  * @example
https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f
  */
	url: string;
	user: SimpleUser | null;
	/**
  * @example
57a7f021a713b1c5a6a199b54cc514735d2d462f
  */
	version: string;
}
