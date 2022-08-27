/* eslint-disable */
// This code is autogenerated using @oa2ts/cli.
// Please do not modify this code directly.
import { SimpleUser } from '../schemas/SimpleUser';
import { GitUser } from '../schemas/GitUser';
import { Verification } from '../schemas/Verification';
import { MinimalRepository } from '../schemas/MinimalRepository';
import { SearchResultTextMatches } from '../schemas/SearchResultTextMatches';

/**
 * Commit Search Result Item
 */
export interface CommitSearchResultItem {
	author: SimpleUser | null;
	/**
	 * @format uri
	 */
	comments_url: string;
	commit: {
		author: {
			/**
			 * @format date-time
			 */
			date: string;
			email: string;
			name: string;
		};
		comment_count: number;
		committer: GitUser | null;
		message: string;
		tree: {
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
		verification?: Verification;
	};
	committer: GitUser | null;
	/**
	 * @format uri
	 */
	html_url: string;
	node_id: string;
	parents: Array<{
		html_url?: string;
		sha?: string;
		url?: string;
	}>;
	repository: MinimalRepository;
	score: number;
	sha: string;
	text_matches?: SearchResultTextMatches;
	/**
	 * @format uri
	 */
	url: string;
}
