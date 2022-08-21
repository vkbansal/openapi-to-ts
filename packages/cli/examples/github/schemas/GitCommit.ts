/**
 * Low-level Git commit operations within a repository
 */
export interface GitCommit {
	/**
	 * Identifying information for the git-user
	 */
	author: {
		/**
  * Timestamp of the commit
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		date: string;
		/**
  * Git email address of the user
  * @example
monalisa.octocat@example.com
  */
		email: string;
		/**
  * Name of the git user
  * @example
Monalisa Octocat
  */
		name: string;
	};
	/**
	 * Identifying information for the git-user
	 */
	committer: {
		/**
  * Timestamp of the commit
  * @format date-time
  * @example
Fri Aug 19 2022 16:10:59 GMT+0530 (India Standard Time)
  */
		date: string;
		/**
  * Git email address of the user
  * @example
monalisa.octocat@example.com
  */
		email: string;
		/**
  * Name of the git user
  * @example
Monalisa Octocat
  */
		name: string;
	};
	/**
	 * @format uri
	 */
	html_url: string;
	/**
  * Message describing the purpose of the commit
  * @example
Fix #42
  */
	message: string;
	node_id: string;
	parents: Array<{
		/**
		 * @format uri
		 */
		html_url: string;
		/**
  * SHA for the commit
  * @example
7638417db6d59f3c431d3e1f261cc637155684cd
  */
		sha: string;
		/**
		 * @format uri
		 */
		url: string;
	}>;
	/**
  * SHA for the commit
  * @example
7638417db6d59f3c431d3e1f261cc637155684cd
  */
	sha: string;
	tree: {
		/**
  * SHA for the commit
  * @example
7638417db6d59f3c431d3e1f261cc637155684cd
  */
		sha: string;
		/**
		 * @format uri
		 */
		url: string;
	};
	/**
	 * @format uri
	 */
	url: string;
	verification: {
		payload: string | null;
		reason: string;
		signature: string | null;
		verified: boolean;
	};
}
