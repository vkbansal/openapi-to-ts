/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.

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
		 * @example "2014-08-09T08:02:04+12:00"
		 */
		date: string;
		/**
		 * Git email address of the user
		 * @example "monalisa.octocat@example.com"
		 */
		email: string;
		/**
		 * Name of the git user
		 * @example "Monalisa Octocat"
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
		 * @example "2014-08-09T08:02:04+12:00"
		 */
		date: string;
		/**
		 * Git email address of the user
		 * @example "monalisa.octocat@example.com"
		 */
		email: string;
		/**
		 * Name of the git user
		 * @example "Monalisa Octocat"
		 */
		name: string;
	};
	/**
	 * @format uri
	 */
	html_url: string;
	/**
	 * Message describing the purpose of the commit
	 * @example "Fix #42"
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
		 * @example "7638417db6d59f3c431d3e1f261cc637155684cd"
		 */
		sha: string;
		/**
		 * @format uri
		 */
		url: string;
	}>;
	/**
	 * SHA for the commit
	 * @example "7638417db6d59f3c431d3e1f261cc637155684cd"
	 */
	sha: string;
	tree: {
		/**
		 * SHA for the commit
		 * @example "7638417db6d59f3c431d3e1f261cc637155684cd"
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
