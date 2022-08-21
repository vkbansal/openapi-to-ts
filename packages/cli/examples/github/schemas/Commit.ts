import { SimpleUser } from '../schemas/SimpleUser';
import { GitUser } from '../schemas/GitUser';
import { GitUser } from '../schemas/GitUser';
import { Verification } from '../schemas/Verification';
import { SimpleUser } from '../schemas/SimpleUser';
/**
 * Commit
 */
export interface Commit {
	author: SimpleUser | null;
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e/comments
  */
	comments_url: string;
	commit: {
		author: GitUser | null;
		comment_count: number;
		committer: GitUser | null;
		/**
  * @example
Fix all the bugs
  */
		message: string;
		tree: {
			/**
  * @example
827efc6d56897b048c772eb4087f854f46256132
  */
			sha: string;
			/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/tree/827efc6d56897b048c772eb4087f854f46256132
  */
			url: string;
		};
		/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
		url: string;
		verification?: Verification;
	};
	committer: SimpleUser | null;
	files?: Array<{
		additions?: number;
		blob_url?: string;
		changes?: number;
		/**
  * @example
"https://api.github.com/repos/owner-3d68404b07d25daeb2d4a6bf/AAA_Public_Repo/contents/geometry.js?ref=c3956841a7cb7e8ba4a6fd923568d86958f01573"
  */
		contents_url?: string;
		deletions?: number;
		filename?: string;
		patch?: string;
		/**
  * @example
"subdir/before_name.txt"
  */
		previous_filename?: string;
		raw_url?: string;
		/**
  * @example
"1e8e60ce9733d5283f7836fa602b6365a66b2567"
  */
		sha?: string;
		status?: string;
	}>;
	/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/commit/6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	html_url: string;
	/**
  * @example
MDY6Q29tbWl0NmRjYjA5YjViNTc4NzVmMzM0ZjYxYWViZWQ2OTVlMmU0MTkzZGI1ZQ==
  */
	node_id: string;
	parents: Array<{
		/**
  * @format uri
  * @example
https://github.com/octocat/Hello-World/commit/7638417db6d59f3c431d3e1f261cc637155684cd
  */
		html_url?: string;
		/**
  * @example
7638417db6d59f3c431d3e1f261cc637155684cd
  */
		sha: string;
		/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/commits/7638417db6d59f3c431d3e1f261cc637155684cd
  */
		url: string;
	}>;
	/**
  * @example
6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	sha: string;
	stats?: {
		additions?: number;
		deletions?: number;
		total?: number;
	};
	/**
  * @format uri
  * @example
https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e
  */
	url: string;
}
