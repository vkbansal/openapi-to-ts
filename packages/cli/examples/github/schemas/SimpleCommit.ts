/**
 * Simple Commit
 */
export interface SimpleCommit {
	author: {
		email: string;
		name: string;
	} | null;
	committer: {
		email: string;
		name: string;
	} | null;
	id: string;
	message: string;
	/**
	 * @format date-time
	 */
	timestamp: string;
	tree_id: string;
}
